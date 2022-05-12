const { response } = require("express");
const express = require("express");
const app = express();


app.get("/api/v1/hello", (req, res) => {
  res.json({"message": "Hello, World!"})
});

// ↓ローカルの環境変数にport番号に指定している人がいたら、その人のポート番号を使って表示しますよという命令。指定がないと3000版を使う
const port = process.env.PORT || 3000;
app.listen(port);
console.log("Listen on port:" + port);

