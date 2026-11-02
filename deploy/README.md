# Cloud Run 部署

`staging`／`prod` 分支更新後由 Cloud Build 建置並部署，prod 需建置前人工核准。服務為 `{env}-keystone3-plate`，位於 `coastal-run-106202`／`asia-east1`。

## 設定與前置條件

- [cloudbuild.yaml](../cloudbuild.yaml) 管理建置、部署參數與 secret 引用，不需應用程式專用 trigger substitutions。
- [staging](env.staging.public.yaml)／[prod](env.prod.public.yaml) public env files 管理公開環境變數。部署會替換整份設定，請在檔案中修改，不要只在 Cloud Run 手動設定。
- MongoDB URI 與 cookie secret 保存在 Secret Manager；首次部署前依 [secrets 說明](secrets/README.md) 建立、授權並加入值。
- `gcp-infrastructure/projects/coastal-run-106202` 管理 triggers、approval、共用 IAM 與網路；對外服務前須完成 LB／IAP。編輯器的 `/_online-users/*` 須轉送至同環境 online-users service，保留完整路徑。
- GCS 使用 runtime SA 的 ADC，不掛載金鑰。Storage／Pub/Sub 授權見 gcp-infrastructure 的 `keystone3-storage.md`；圖片上傳使用 object ACL，需確認 bucket 允許該流程。

## 建置與驗證

```sh
docker build --platform linux/amd64 -t keystone3-plate:local .
```

Docker 從 lockfile 安裝 production dependencies，並執行 `scripts/check-admin-bundles.js` 編譯五個 Keystone 後台入口；不連資料庫。部署設定修改後，需在 staging 驗證登入、編輯與存檔、媒體操作及在線名單。啟動時不執行資料庫 migrations，若有需要須另行安排。

## 流量與回退

部署使用 image digest，服務追蹤 latest 時，新 revision 就緒後直接接收流量。首次建立服務沒有舊 revision 可回退。

回退至已驗證的 revision（prod 請替換 service 名稱）：

```sh
gcloud run services update-traffic staging-keystone3-plate \
  --project=coastal-run-106202 --region=asia-east1 \
  --to-revisions=PREVIOUS_REVISION=100
```

舊部署流程或回退操作會將流量固定至指定 revision。確認最新 revision 可上線後，執行以下指令恢復追蹤 latest；這會立即切換流量：

```sh
gcloud run services update-traffic staging-keystone3-plate \
  --project=coastal-run-106202 --region=asia-east1 --to-latest
```

回退 revision 不會回退 secret，注意 [secret 輪替限制](secrets/README.md#輪替與回退)。

## 已知限制：staging 圖片

staging 前台使用 prod plate 的圖片。staging-plate 尚無完整縮圖處理流程，但上傳仍啟用、寫入 staging bucket 並發布到共用 topic，縮圖 metadata 可能沿用 production URL。此限制暫時接受，不阻擋部署；不代表圖片功能已驗證，測試圖片紀錄也不應帶入正式資料。

實際使用 staging 圖片前，須確認 consumer 與權限、輸出路徑、公開存取方式，並將已驗證的 `KEYSTONE_RESIZE_IMAGE_URL_PREFIX` 加入 staging env file，完成上傳與縮圖讀取驗證。
