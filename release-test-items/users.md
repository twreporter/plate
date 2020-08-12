## 測試 Users 頁面

### go to  `/keystone/users` 

---

#### 測試 Search 功能：
1. 在 Search 的輸入框中，輸入文字`林` 
2. 確認畫面中的 Users 列表要剩下有文字`林`的 Users。

---

#### 測試 Columns 功能
點選 Columns 按鈕後，會出現四個欄位，包含：
1. `Two-Step Verification Enabled`
2. `Email`
3. `Password`
4. `Can access Keystone`
其中 `Email`和`Can access Keystone`預設是打勾的狀態，而 `Two-Step Verification Enabled`和`Password`是尚未打勾的狀態。

##### 列表裡列出 `Two-Step Verification Enabled`欄位
1. 打勾`Two-Step Verification Enabled`
2. 按下 Apply 按鈕
3. 檢查列表中，是否出現`Two-Step Verification Enabled`欄位
4. 若出現，代表正常，反之則否

---

#### 測試 Filter 功能：
點選 Filter 按鈕，會出現四個欄位，包含：
1. `Two-Step Verification Enabled`
2. `Email`
3. `Password`
4. `Can access Keystone`

##### 列表 filtered by `Two-Step Verification Enabled`
1. 點選 `Two-Step Verification Enabled`
2. 畫面會出現`Is Checked` 和 `Is NOT Checked` 兩個按鈕
3. 點選 `Is NOT Checked` 按鈕後，按下 Apply 按鈕
4. 列表會被過濾，只秀出 `Two-Step Verification Enabled`是*未打勾*的資料列

##### 列表 filtered by `Email`
1. 點選`Email`
2. 選擇 `Matches` 選項
3. 選擇 `Contains` 選項
4. 在輸入框中，輸入文字 `turtle`
5. 按下 Apply 按鈕
6. 列表會被過濾，只秀出`Email`中包含`turtle`字串的資料列

---

#### 新增 User
1. 點選 `+ Create User` 按鈕
2. 畫面會跳出多個輸入框的組合
3. 在第一個輸入框中輸入`測試用帳號`
4. 在 `Email`輸入框中輸入`test@twreporter.org`
5. 在 `Password` 輸入框中連續輸入 `1234`
6. 按下 Create 按鈕
7. 畫面會出現 `New User 測試用帳號 created`

---

#### 刪除 User
1. 根據「[新增 User](#新增-user)」，產生欲刪除的帳號
2. 到 Users 列表頁 (`/keystone/users`)
3. 找到 Name 是 `測試用帳號` 的資料列
4. 點選資料列前的垃圾桶 icon
5. 點選 Delete 按鈕
6. 確認列表中，沒有 `測試用帳號` 資料列

---
