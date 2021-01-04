## 測試 Tags 頁面

### go to  `/keystone/tags` 

---

#### 測試 Search 功能：
1. 在 Search 的輸入框中，輸入文字`總統大選` 
2. 確認畫面中的 Tags 列表中，列出的資料列的`標籤名稱`包含`總統大選`字串。

---

#### 新增 Tag
1. 點選 `+ Create Tag` 按鈕
2. 在輸入框中輸入`test-tag`
3. 按下 Create 按鈕
4. 畫面會出現 `New Tag test-tag created.`

---

#### 刪除 Tag
1. 根據「[新增 Tag](#新增-tag)」，產生測試資料
2. 到 Tags 列表頁 (`/keystone/tags`)
3. 找到`標籤名稱`是`test-tag`的資料列
4. 點選資料列前的垃圾桶 icon
5. 點選`Delete`按鈕
6. 確認列表中，沒有`標籤名稱`是`test-tag`的資料列

---
