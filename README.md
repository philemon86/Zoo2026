# 閱讀動物園網站｜部署整理版

這一包是從原始 `網頁用.rar` 清理出來的靜態網站部署版。沒有 Node/Vite/React build step，直接把整個資料夾作為 static site 部署即可。

## 入口頁面

- `index.html`：首頁
- `zoo-map.html`：閱讀動物園書區地圖
- `GIFT.html`：禮品／文具／桌遊入口
- `activities.html`：活動頁

## 主要分類頁

- `bear-books.html`：熊新書區
- `sheep-books.html`：小羊童書區
- `fox-books.html`：狐狸少年區
- `giraffe-books.html`：長頸鹿大人區
- `kangaroo-books.html`：袋鼠家長區
- `owl-books.html`：貓頭鷹教員區
- `board-games.html`：桌遊商品頁
- `stationery-products.html`：文具商品頁
- `gift-products.html`：禮品商品頁

## 目錄結構

```text
.
├── index.html
├── zoo-map.html
├── GIFT.html
├── activities.html
├── *-books.html / *-products.html
├── assets/
│   ├── common/        # favicon、logo、游標、轉場 CSS/JS
│   ├── home/          # 首頁主視覺與動物素材
│   ├── books/         # 書區地圖、背景、書封、樹樁
│   └── gift/          # 禮品區場景、招牌、banner
├── data/              # 商品頁 runtime data JS
└── docs/
    ├── reference-data/       # 商品原始 JSON，供後續維護參考
    └── removed-files.md      # 本次刪除／未納入部署的檔案類型
```

## 部署方式

使用任一靜態網站服務皆可：GitHub Pages、Netlify、Vercel、Cloudflare Pages、Shopline 自訂頁面靜態資源等。部署根目錄請設定為本資料夾，入口為 `index.html`，不需要 build command。

本機預覽可在資料夾內執行：

```bash
python3 -m http.server 5173
```

然後開啟 `http://localhost:5173/`。

## Codex 維護提示

這是純 HTML/CSS/JS 專案。若要改素材路徑，請優先維持 `assets/` 分層；若要改桌遊、文具、禮品商品列表，請同步檢查 `data/*-data.js`，`docs/reference-data/*.json` 只作為來源參考，不會被頁面直接載入。
