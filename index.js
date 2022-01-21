//Expressをインポート
const express = require('express');
const app = express();

//ポートを設定
const port = 3000;

//サーバー起動　リクエストを待機 (node index.js)
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})

