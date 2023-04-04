// // const { createPool } = require('mysql');

const mySql = require("mysql");
const conn = mySql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "shop",
});
conn.connect((err) => {
  if (err) {
    console.log("error");
  } else {
    console.log("Connected");
  }
});

conn.query("select shop_name,category from shop_info", (err, res) => {
  console.log("Result", res);
});