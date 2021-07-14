## 測試 Images 頁面

### go to  `/keystone/images` 

---

#### 新增 Image
1. 點選 `+ Create Image` 按鈕
2. 在輸入框中輸入`test-image`
3. 按下`Upload Image`按鈕，選擇一張照片上傳（可以上傳螢幕截圖，若本機端沒有照片可以上傳）
4. 畫面會出現 `New Image test-image created.`

---

#### 測試 Search 功能：
1. 根據「[新增 Image](#新增-image)」，產生測試照片
2. 到 Images 列表頁 (`/keystone/images`)
3. 在 Search 的輸入框中，輸入文字`test-image` 
4. 確認畫面中的 Images 列表中，列出的資料列的`Description`包含`test-image`字串。

---

#### 刪除 Image
1. 根據「[新增 Image](#新增-image)」，產生測試照片
2. 根據「[測試 Search 功能](#測試-search-功能)」，找到測試照片
3. 點選資料列前的垃圾桶 icon
4. 點選`Delete`按鈕
5. 確認列表中，沒有`Description`是`test-image`的資料列

---
