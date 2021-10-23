  var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "bookreview"
});


// //#1
/*
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
  var sql = "CREATE TABLE login (username varchar(20),password varchar(20),type varchar(20))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
*/

// #2 table reader

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    
    var sql = "CREATE TABLE rating (rname varchar(20),bname varchar(30), title varchar(30), author varchar(30),publication varchar(30),genre varchar(30),rating int(1))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });
  