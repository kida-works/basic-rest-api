// const { response } = require("express");
const express = require("express");
const app = express();
const sqlite3 = require('sqlite3')
const path = require('path')

const dbpath = "app/db/database.sqlite3"

app.use(express.static(path.join(__dirname, 'public')))

// Get all users(usersのデータを全て取得)
app.get("/api/v1/users", (req, res) => {
  // Connect database(データベースに接続)
  const db = new sqlite3.Database(dbpath)

  // usersデータ全て取得
  db.all('SELECT * FROM users', (err, rows)=>{
    res.json({"message": "Hello World!"})
  })
  db.close()
});

// Get a user(user個人のデータ全て取得)
// :id は変数的に扱うことができる
app.get("/api/v1/users/:id", (req, res) => {
  // Connect database(データベースに接続)
  const db = new sqlite3.Database(dbpath)
  const id = req.params.id

  // userデータ全て取得
  db.get(`SELECT * FROM users WHERE id = {id}`, (err, row)=>{
    res.json(row)
  })

  //Search users matching keyword (検索)
  app.get("/api/v1/search", (req, res) => {
    // Connect database(データベースに接続)
    const db = new sqlite3.Database(dbpath)
    // データ取得
    const ketword = req.query.p
  
    // userデータ全て取得
    db.all(`SELECT * FROM users WHERE name = name LIKE "%${keywprd}%"`, (err, row)=>{
      res.json(row)
    })
  })
  db.close()

});

// ↓ローカルの環境変数にport番号に指定している人がいたら、その人のポート番号を使って表示しますよという命令。指定がないと3000版を使う
const port = process.env.PORT || 3000;
app.listen(port);
console.log("Listen on port:" + port);

