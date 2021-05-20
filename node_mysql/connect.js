const mysql = require("mysql");
const express = require("express");
const cors = require('cors');

const app = express();

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  port:"3306",
  database:"new_jd"
});

connection.connect(function (err) {
  if (err) {
    return console.error("error: " + err.message);
  }

  console.log("Connected to mysql database DEMO.");
});

app.use(cors());

app.get("/data", (req, res) => {
  connection.query("SELECT * FROM job_description;", (err, results, fields) => {
    if (err) throw err;
    res.send(results);
  });
});

app.listen(3000, (err) => {
  if (err) throw err;
  console.log(`App listening on port 3000`);
});
