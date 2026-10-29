# Plate secrets

先建立同環境 runtime SA，再從 plate repo 執行：

```sh
bash deploy/secrets/create-secrets.sh --apply YOUR_ACCOUNT_EMAIL staging
```

prod 將最後一個參數改為 `prod`。腳本只建立 secret resource 與逐 secret 的 runtime 存取權，不讀取或輸入 secret 值。既有 secret 的值、versions 與 metadata 保持原樣；查詢失敗會停止，不當作資源不存在。操作者需具備 SA 查詢、Secret Manager 列出／建立／IAM 管理權限。

| Secret ID | 用途 | Cloud Run 環境變數 |
| --- | --- | --- |
| `{env}-keystone3-plate_mongodb-uri` | plate MongoDB 帳號的 URI | `KEYSTONE_MONGODB` |
| `{env}-keystone3-plate_cookie-secret` | 維持既有 session 簽章的 cookie secret | `KEYSTONE_COOKIE_SECRET` |

兩個 secret 只授予同環境 `sa-keystone3-{nonprod|prod}-runtime` 的 `roles/secretmanager.secretAccessor`。同環境 online-users 共用此 runtime SA，也會繼承存取權；CI SA 不取得 secret 值的存取權。

使用 Secret Manager Console 加入 secret version，或在自己的終端機指定 repo 外的檔案：

```sh
gcloud secrets versions add staging-keystone3-plate_mongodb-uri \
  --project=coastal-run-106202 --account=YOUR_ACCOUNT_EMAIL \
  --data-file=/ABSOLUTE/PATH/OUTSIDE/REPO
```

不要把值放進 git、build substitutions、image 或指令列字串。檔案內容需保持 URI／cookie secret 原值，不額外附加換行。staging URI 指向 `staging-plate` database，prod 指向 `plate`；不要用 online-users 的受限 MongoDB 帳號替代 plate 帳號。

`cloudbuild.yaml` 依 staging／prod 分支引用上述 secret 的 `:latest`，不需要在 infrastructure trigger 設定 secret substitutions。實際值仍只保存在 Secret Manager，公開 env YAML 不得放入 URI、密碼或 cookie secret。

## 輪替與回退

- Secret 環境變數在 instance 啟動時解析 `latest`；既有 instance 不會自動更新，新啟動的 instance 可能已使用新版本。
- 新增版本前，先準備新舊設定可並存的過渡期。加入版本後安排重新部署或替換 instances，驗證新 instances 的連線與服務行為，再停用舊憑證／secret version。
- 回退 revision 不會回退 secret；重新啟動的舊程式仍會解析 `latest`，必須相容於目前有效設定。若需還原設定，另行規劃 secret 與憑證的恢復，不要只回退 image。
- 搬遷時維持原 cookie secret。輪替 cookie secret 可能使既有 session 簽章失效；新舊 instances 並存時也可能出現間歇性登入失效。輪替前需評估 session 影響並規劃流量切換與重新登入，不視為無感更新。

應用程式 repo 管理 secret 引用、public env files 與逐 secret runtime 授權腳本；infrastructure 管理 triggers、人工核准、共用 IAM／service accounts 與網路。變更應用程式設定不需調整 trigger substitutions。
