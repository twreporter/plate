# plate 的 Cloud Run 部署

這套流程部署舊版 Keystone 3，不修改 Keystone 套件。`staging`、`prod` 分支的 push triggers 由 `gcp-infrastructure/projects/coastal-run-106202` 管理；prod trigger 需設定建置前人工核准。這份設定不會自行建立 trigger、IAM、LB 或 IAP。

## 建置與部署

Docker 使用 Node 10.15.3、Yarn 1.22.22 與現有 yarn.lock，在 image 內安裝 production 依賴，再透過 Keystone 原始 middleware 編譯五個後台入口。編譯不啟動 plate，也不連 MongoDB。本機 node_modules、config.js、金鑰與舊聊天室 bundle 不會進入建置內容。

```sh
docker build --platform linux/amd64 -t keystone3-plate:local .
```

Cloud Build 先檢查設定，再 build、push，最後以查得的 image digest 部署。Tag 使用分支、完整 commit SHA 與 Build ID。新 revision 就緒後，流量才切到該 revision；部署失敗會停止。首次建立 service 沒有舊 revision 可回退。

| 設定 | staging | prod |
| --- | --- | --- |
| Service | staging-keystone3-plate | prod-keystone3-plate |
| Runtime SA | sa-keystone3-nonprod-runtime | sa-keystone3-prod-runtime |
| Subnet | asia-east1-cloud-run-nonprod | asia-east1-cloud-run-prod-services |
| Instances | 0–1 | 0–3 |

Project 是 `coastal-run-106202`，region 是 `asia-east1`；SA email 後綴為 `@coastal-run-106202.iam.gserviceaccount.com`。兩環境都使用第一代、1 vCPU、512 MiB、request-based CPU、concurrency 20，經 `twreporter-custom-network` 的 private-ranges-only egress 連線資料庫。

Ingress 限制為 internal-and-cloud-load-balancing，允許 allUsers invocation。外部入口須先完成 LB／IAP 防護再切換 DNS。Keystone 自身的登入和 TOTP 維持原樣。

## 部署前要準備的設定

在各環境 trigger 填入下列 substitutions，尚未提供的值刻意留空，檢查不通過就不會部署：

- `_MONGODB_SECRET`：MongoDB URI 的 Secret Manager `secret-name:數字版本`。staging 指向 staging-plate database，prod 指向 plate database。
- `_COOKIE_SECRET`：既有 session cookie secret 的 `secret-name:數字版本`，搬遷時維持相同值。
- `_GCS_PROJECT_ID`：預設為已確認的 `coastal-run-106202`。

音訊、影片、原圖、縮圖、頭像共用同環境 bucket：prod 使用 `twreporter-multimedia`，staging 使用 `staging-twreporter-multimedia`。名稱由部署腳本統一設定，不需 trigger substitutions。物件路徑沿用既有程式，沒有搬移檔案或改寫 MongoDB 中的舊路徑。staging bucket 的建立與 runtime SA 授權見 infrastructure repo 的 `projects/coastal-run-106202/keystone3-storage.md`。

只填資源名稱，不填密碼或金鑰內容。Runtime SA 需取得這兩個 secrets 的存取權；CI SA 需有部署、寫入 Artifact Registry 及使用對應 runtime SA 的權限。

GCS 使用 Cloud Run runtime SA 的 Application Default Credentials，不指定 keyFilename、不掛載金鑰，也不要設定 GOOGLE_APPLICATION_CREDENTIALS。舊版 SDK 在沒有金鑰設定時會走 ADC。

現有上傳流程會設定 object ACL（makePublic），因此對各環境需要的 buckets 授予 runtime SA `roles/storage.objectAdmin`，不授予整個 project 的 Storage Admin。這次不變更 bucket 的 ACL 模式；若 bucket 已啟用 uniform bucket-level access 或 public access prevention，必須先確認現有 makePublic 流程相容性。實際 bucket 名稱、IAM 與上傳／刪除需在 staging 驗證。若共用同一 runtime SA，online-users 也會繼承這些權限。

參考：[Cloud Run service identity](https://docs.cloud.google.com/run/docs/securing/service-identity)、[Storage IAM roles](https://docs.cloud.google.com/storage/docs/access-control/iam-roles)。

## 遷移與回復

容器設定已關閉 auto update，啟動不會自動執行資料更新；image 不包含 updates 目錄。若版本需要 migration，需另外審查並單次執行。這個 image 已改用 runtime SA，不能直接假設仍適用舊 K8s 的金鑰掛載方式。

回復時指定上一個已驗證 revision，不重新 build：

```sh
gcloud run services update-traffic staging-keystone3-plate \
  --project=coastal-run-106202 --region=asia-east1 \
  --to-revisions=PREVIOUS_REVISION=100
```

舊聊天室的啟動與 bundle 建置已移除，原有依賴與 lockfile 暫時保留，以免這次遷移同時改變套件解析結果。

## 圖片縮圖的 Pub/Sub

**已知限制：staging 圖片功能尚未完整支援。** 目前沒有 staging 版 resize-image 處理服務，staging-plate 上傳圖片的縮圖產生與公開讀取不在本輪部署驗證範圍。staging 前台使用 prod plate 上傳的圖片，未使用 staging-plate 上傳的圖片。

暫時接受 review P2（staging 缺少環境專用縮圖 URL prefix），不以此阻擋 staging 部署；這是已知限制，並非已修復。staging 上傳仍維持啟用、使用 staging bucket，且仍會發布到共用 topic；儲存的縮圖 metadata 可能沿用 production URL，不能據此認定縮圖可用，也不要將這些測試圖片紀錄帶入正式資料。未來若要實際使用 staging 上傳圖片，須先確認 consumer 行為與權限、縮圖輸出路徑及公開存取方式，將已驗證的 `KEYSTONE_RESIZE_IMAGE_URL_PREFIX` 納入部署 env file，並完成端對端驗證。

staging、prod 共用 `projects/coastal-run-106202/topics/resize-image`，部署腳本明確設定 `KEYSTONE_PUBSUB_RESIZE_IMAGE_TOPIC`。plate 使用 runtime SA 的 ADC 發布訊息，不需要金鑰。每張圖片發布五個尺寸任務，訊息的 input_bucket／output_bucket 使用該環境的 bucket。

兩個 runtime SA 都需要該 topic 的 `roles/pubsub.publisher`；授權腳本位於 infrastructure repo 的 `projects/coastal-run-106202/grant-keystone3-pubsub.sh`。這不代表縮圖服務已經能處理 staging：還需確認 consumer 使用訊息中的 bucket，而非固定 prod bucket，並授予其執行身分對 staging bucket 的必要讀寫權限。兩環境共用 consumer 的處理容量與失敗重試流程。

目前 `models/Image.js` 的縮圖 URL 預設仍是 `https://www.twreporter.org/images/`。staging 的 `KEYSTONE_RESIZE_IMAGE_URL_PREFIX`、縮圖輸出路徑及公開讀取方式待確認後設定，不能只靠共用 topic 就視為圖片功能已完成遷移。不要將尚未確認的 staging 縮圖 URL 寫入正式資料。

## Secrets 建立與授權

使用 [secrets 管理腳本](secrets/README.md) 建立該環境的 MongoDB URI／cookie secret resources 與逐 secret runtime 授權。腳本不讀寫 secret 值，數字版本由管理員加入後填入 trigger。
