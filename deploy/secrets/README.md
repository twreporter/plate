# Plate secrets

## 首次設定

先建立同環境 runtime SA，再從 repo 根目錄執行（prod 將最後參數改為 `prod`）：

```sh
bash deploy/secrets/create-secrets.sh --apply YOUR_ACCOUNT_EMAIL staging
```

腳本建立兩個 secret resources，授予同環境 runtime SA 存取權；不讀寫 secret 值。同環境 online-users 共用此 SA，也會繼承存取權。

- `{env}-keystone3-plate_mongodb-uri`：plate 的 MongoDB URI；staging 使用 `staging-plate` database，prod 使用 `plate`。
- `{env}-keystone3-plate_cookie-secret`：session 簽章密鑰；搬遷時保留原值。

以 Secret Manager Console 加入版本，或使用 repo 外的檔案：

```sh
gcloud secrets versions add staging-keystone3-plate_mongodb-uri \
  --project=coastal-run-106202 --account=YOUR_ACCOUNT_EMAIL \
  --data-file=/ABSOLUTE/PATH/OUTSIDE/REPO
```

Cookie secret 使用同樣方式加入。值不得放入 git、public env files 或 build substitutions；檔案內容不要額外附加換行。[cloudbuild.yaml](../../cloudbuild.yaml) 已引用兩個 secrets 的 `:latest`，不需修改 trigger。

## 輪替與回退

- `latest` 在 instance 啟動時解析，既有 instance 不會自動更新。先準備新舊設定可並存的過渡期，再新增版本、重新部署或替換 instances；驗證後才停用舊憑證。
- 回退 revision 不會回退 secret；舊程式必須相容於目前有效設定。
- Cookie secret 輪替可能使既有 session 失效，新舊 instances 並存也可能造成間歇性登入失效；需規劃流量切換與重新登入。
