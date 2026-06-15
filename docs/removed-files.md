# 未納入部署的檔案說明

本次整理以「正式上架可直接部署」為準，以下內容未放進部署版：

## 已排除

- 編輯頁／內部工具頁：`edit.html`、`bear-edit.html`、`GIFT-edit.html`
- 備份頁與歷史版本：`index-home-backup.html`、`bear-books-backup-20260518.html`、`sheep-books-backup-20260518.html`、`*.bak-*`、`備份/`
- 參考頁與大型舊版頁面：`參考頁面/`
- 更新腳本與批次檔：`update-*.py`、`更新桌遊資料.bat`
- 未被正式頁面引用的主視覺參考圖、演示圖、重複 Logo、Originals 原始素材、未使用書封或重複書封
- 未被 runtime 載入的熊區／羊區舊資料檔：`bear-books-data.js`、`bear-books.json`、`sheep-books-data.js`、`sheep-books.json`

## 保留原則

只保留目前正式頁面會直接載入的 HTML、CSS、JS、商品資料、圖片素材。商品頁用到的 runtime data JS 已放在 `data/`；商品 JSON 另放 `docs/reference-data/` 供 Codex 之後維護參考。
