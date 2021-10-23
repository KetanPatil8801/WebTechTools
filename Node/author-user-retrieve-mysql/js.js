var mysql = require('mysql');
var express = require('express');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var url=require('url');
const { response } = require('express');
const { request } = require('http');
const { type } = require('os');
var urlencodedParser=bodyParser.urlencoded({extended:true});

var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'bookreview'
})


app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
   
   
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());



app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname + '/start.html'));
});

app.post('/validatereader', function(request, response) {
    var username = request.body.username;
    var password = request.body.password;
    
        if (username && password) {
     con.query('SELECT * FROM login WHERE username = ? AND password = ? AND type="reader" ', [username, password], function(error, results, fields) {
      if (results.length > 0) {
       request.session.loggedin = true;
       request.session.username = username;
       
       
       response.redirect('/reader');
      }
      else {
       response.send('Incorrect Username and/or Password!');
      }   
      response.end();
     });
     
    }
    else {
     response.send('Please enter Username and Password!');
     response.end();
    }

    
});
app.post('/validateauthor', function(request, response) {
    var username = request.body.username;
    var password = request.body.password;
    
        if (username && password) {
     con.query('SELECT * FROM login WHERE username = ? AND password = ? AND type="author" ', [username, password], function(error, results, fields) {
      if (results.length > 0) {
       request.session.loggedin = true;
       request.session.username = username;
       
       
       response.redirect('/author');
      }
      else {
       response.send('Incorrect Username and/or Password!');
      }   
      response.end();
     });
     
    }
    else {
     response.send('Please enter Username and Password!');
     response.end();
    }

    
});

app.get('/author',function(req,res){
    res.sendFile(path.join(__dirname + '/author.html'));
})
app.get('/reader',function(req,res){
    res.sendFile(path.join(__dirname + '/reader.html'));
})

app.get('/ratebook',function(req,res){
    res.sendFile(path.join(__dirname + '/ratebook1.html'));    
});

app.get('/authorlogin',function(req,res){
    res.sendFile(path.join(__dirname + '/authorlogin.html'));    
});
app.get('/readerlogin',function(req,res){
    res.sendFile(path.join(__dirname + '/readerlogin.html'));    
});

app.get('/author1',function(req,res){
    con.query("select * from rating where author='node' order by rating ",function(err,result,fields){
        console.log(result);
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('<style>body{background-color: bisque;}</style>')
        res.write('<style>body{align:center; padding-top: 3%}</style>')
        res.write('<style>table{tabwidth=1000px;}</style>')
        res.write('<style>table{font-family:cursive;border-collapse:collapse;}</style>')
        res.write('<style>.my-h1{font-size:41px;margin-bottom:35px;text-align:center;}</style>')
        res.write('<style>th{font-size:24px;}</style>')
        res.write("<body>")
        res.write("<h1 class='my-h1'>node</h1>")
        res.write("<table border='5px solid black' width='100%';border-color: rgb(32, 7, 71);>");
        res.write("<tr>");
        for(var x in result[0])
        {
            res.write("<th><label>"+ x +"</label></th>");

        }
        res.write("</tr>");
        for(var row in result)
        {
            res.write("<tr>");
            for(var col in result[row])
            {
                res.write("<td>"+ result[row][col] +"</td>");
                
            }
            //res.write("<td><a href='http://localhost:9000/leave?name="+result[row]['student_name']+"&date="+result[row]['date']+"'>Leave Letter</a></td>")
            res.write("</tr>")
        }
        res.write("</table>");
        res.end();
    });
     
});

app.get('/author2',function(req,res){
    con.query("select * from rating where author='ang' order by rating",function(err,result,fields){
        console.log(result);
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('<style>body{background-color: bisque;}</style>')
        res.write('<style>body{align:center; padding-top: 3%}</style>')
        res.write('<style>table{tabwidth=1000px;}</style>')
        res.write('<style>table{font-family:cursive;border-collapse:collapse;}</style>')
        res.write('<style>.my-h1{font-size:41px;margin-bottom:35px;text-align:center;}</style>')
        res.write('<style>th{font-size:24px;}</style>')
        res.write("<body>")
        res.write("<h1 class='my-h1'>ang</h1>")
        res.write("<table border='5px solid black' width='100%';border-color: rgb(32, 7, 71);>");
        res.write("<tr>");
        for(var x in result[0])
        {
            res.write("<th><label>"+ x +"</label></th>");

        }
        res.write("</tr>");
        for(var row in result)
        {
            res.write("<tr>");
            for(var col in result[row])
            {
                res.write("<td>"+ result[row][col] +"</td>");
                
            }
            //res.write("<td><a href='http://localhost:3000/leave?name="+result[row]['student_name']+"&date="+result[row]['date']+"'>Leave Letter</a></td>")
            res.write("</tr>")
        }
        res.write("</table>");
        res.end();
    });
     
});



app.post('/addrating',function(req,res){
        console.log("Rating Added");
        var rname= req.session.username;
        var booktitle=req.body.booktitle;
        var author=req.body.author;
        var publication= req.body.publication;
        var genre=req.body.genre;
        var rating=req.body.rating;
        console.log(rname);

        values=[[rname,booktitle,author,publication,genre,rating]];

        con.query('INSERT INTO rating (rname,title,author,publication,genre,rating) VALUES ? ',[values], function (err, result)
        {
            if (err) throw err;
        console.log('Marked!');
       
        res.redirect('/reader');
        res.end();
        // res.end("Marked Successfully!");
    });
        
   
});

app.get('/viewrating',function(req,res){
    var rname=req.session.username;
    
    con.query("select * from rating order by rating",function(err,result,fields){
        console.log(result);
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('<style>body{background-color: bisque;}</style>')
        res.write('<style>body{align:center; padding-top: 3%}</style>')
        res.write('<style>table{tabwidth=1000px;}</style>')
        res.write('<style>table{font-family:cursive;border-collapse:collapse;}</style>')
        res.write('<style>.my-h1{font-size:41px;margin-bottom:35px;text-align:center;}</style>')
        res.write('<style>th{font-size:24px;}</style>')
        res.write("<body>")
        res.write("<h1 class='my-h1'>Ratings</h1>")
        res.write("<table border='5px solid black' width='100%';border-color: rgb(32, 7, 71);>");
        res.write("<tr>");
        for(var x in result[0])
        {
            res.write("<th><label>"+ x +"</label></th>");

        }
        res.write("</tr>");
        for(var row in result)
        {
            res.write("<tr>");
            for(var col in result[row])
            {
                res.write("<td>"+ result[row][col] +"</td>");
                
            }
            
            res.write("</tr>")
        }
        res.write("</table>");
        res.end();
    });
});


app.listen(9000);