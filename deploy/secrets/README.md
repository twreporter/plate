# Plate secrets

先建立同環境 runtime SA，再從 plate repo 執行：

```sh
bash deploy/secrets/create-secrets.sh --apply YOUR_ACCOUNT_EMAIL staging
```

prod 將最後一個參數改為 `prod`。腳本只建立 secret resource 與逐 secret 的 runtime 存取權，不讀取或輸入 secret 值。既有 secret 的值、versions 與 metadata 保持原樣；查詢失敗會停止，不當作資源不存在。操作者需具備 SA 查詢、Secret Manager 列出／建立／IAM 管理權限。

| Secret ID | 用途 | Cloud Build substitution |
| --- | --- | --- |
| `{env}-keystone3-plate_mongodb-uri` | plate MongoDB 帳號的 URI | `_MONGODB_SECRET` |
| `{env}-keystone3-plate_cookie-secret` | 維持既有 session 簽章的 cookie secret | `_COOKIE_SECRET` |

兩個 secret 只授予同環境 `sa-keystone3-{nonprod|prod}-runtime` 的 `roles/secretmanager.secretAccessor`。同環境 online-users 共用此 runtime SA，也會繼承存取權；CI SA 不取得 secret 值的存取權。

使用 Secret Manager Console 加入 secret version，或在自己的終端機指定 repo 外的檔案：

```sh
gcloud secrets versions add staging-keystone3-plate_mongodb-uri \
  --project=coastal-run-106202 --account=YOUR_ACCOUNT_EMAIL \
  --data-file=/ABSOLUTE/PATH/OUTSIDE/REPO
```

不要把值放進 git、build substitutions、image 或指令列字串。檔案內容需保持 URI／cookie secret 原值，不額外附加換行。staging URI 指向 `staging-plate` database，prod 指向 `plate`；不要用 online-users 的受限 MongoDB 帳號替代 plate 帳號。

將實際的數字版本填入 trigger，例如 `_MONGODB_SECRET=staging-keystone3-plate_mongodb-uri:1` 與 `_COOKIE_SECRET=staging-keystone3-plate_cookie-secret:1`。這裡的 `1` 只是範例，部署不接受 latest。回復 revision 前，確認它引用的舊 secret version 仍可用；不要在搬遷時任意輪替 cookie secret。
