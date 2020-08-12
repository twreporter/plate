## 測試 Contacts 頁面

### go to  `/keystone/contacts` 

---

#### 測試 Search 功能：
1. 在 Search 的輸入框中，輸入文字`林` 
2. 確認畫面中的 Users 列表要剩下有文字`林`的 Users。

---

#### 測試 Columns 功能
點選 Columns 按鈕後，會出現四個欄位，包含：
1. `職稱`
2. `Email`
3. `照片`
4. `簡介`
其中 `Email`預設是打勾的狀態，而`職稱`、`照片`和`簡介`是尚未打勾的狀態。

##### 列表裡列出`職稱`欄位
1. 打勾`職稱`
2. 按下 Apply 按鈕
3. 檢查列表中，是否出現`職稱`欄位
4. 若出現，代表正常，反之則否

---

#### 測試 Filter 功能：
點選 Filter 按鈕，會出現四個欄位，包含：
1. `職稱`
2. `Email`
3. `照片`

##### 列表 filtered by `職稱`
1. 點選`職稱`
2. 選擇`Matches`選項
3. 選擇`Contains`選項
4. 在輸入框中，輸入文字 `特約記者`
5. 按下 Apply 按鈕
6. 列表會被過濾，只秀出`職稱`中包含`特約記者`字串的資料列

##### 列表 filtered by `Email`
1. 點選`Email`
2. 選擇 `Matches` 選項
3. 選擇 `Contains` 選項
4. 在輸入框中，輸入文字 `turtle`
5. 按下 Apply 按鈕
6. 列表會被過濾，只秀出`Email`中包含`turtle`字串的資料列

---

#### 新增 Contact
1. 點選 `+ Create Contact` 按鈕
2. 畫面會跳出多個輸入框的組合
3. 在第一個輸入框中輸入`測試用帳號`
4. 在 `Email`輸入框中輸入`test@twreporter.org`
6. 按下 Create 按鈕
7. 畫面會出現 `New Contact 測試用帳號 created`

---

#### 刪除 Contact
1. 根據「[新增 Contact](#新增-contact)」，產生欲刪除的帳號
2. 到 Contacts 列表頁 (`/keystone/contacts`)
3. 找到 Name 是 `測試用帳號` 的資料列
4. 點選資料列前的垃圾桶 icon
5. 點選 Delete 按鈕
6. 確認列表中，沒有 `測試用帳號` 資料列

---
