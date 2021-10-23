var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "bookreview"
});
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO login (username, password, type) VALUES ?";
    var values = [

        ['abc','123','reader'],
        ['def','123','reader'],
        ['kle','123','reader'],
        ['bvb','123','reader'],
        ['Author1','123','author'],
        ['Author21','123','author']
    ];
    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
});

