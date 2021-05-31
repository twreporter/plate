## 測試 Post Categories 頁面

### go to  `/keystone/post-categories` 

---

#### 測試 Search 功能：
1. 在 Search 的輸入框中，輸入文字`報導者` 
2. 確認畫面中的 Post Categories 列表中，列出的資料列的`名稱`包含`報導者`字串。

---

#### 測試 Columns 功能
點選 Columns 按鈕後，會出現以下欄位，包含：
1. `Sort Order`

而其欄位是尚未打勾的狀態。

##### 列表裡列出`Sort Order`欄位
1. 打勾`Sort Order`
2. 按下 Apply 按鈕
3. 檢查列表中，是否出現`Sort Order`欄位
4. 若出現，代表正常，反之則否

---

#### 測試 Filter 功能：
點選 Filter 按鈕，會出現以下欄位：
1. `Sort Order`

##### 列表 filtered by `Sort Order`
1. 點選`Sort Order`
2. 選擇`Greater Than`選項
3. 在輸入框中，輸入`3`
4. 按下 Apply 按鈕
5. 列表會被過濾，只秀出`Sort Order`大於`3`的資料列

---

#### 新增 Post Category
1. 點選 `+ Create Post Category` 按鈕
2. 在輸入框中輸入`test-post-category`
3. 按下 Create 按鈕
4. 畫面會出現 `New Post Category test-post-category created.`

---

#### 刪除 Post Category
1. 根據「[新增 Post Category](#新增-post-category)」，產生測試資料
2. 到 Post Categories 列表頁 (`/keystone/post-categories`)
3. 找到`名稱`是`test-post-category`的資料列
4. 點選資料列前的垃圾桶 icon
5. 點選`Delete`按鈕
6. 確認列表中，沒有`名稱`是`test-post-category`的資料列

---
