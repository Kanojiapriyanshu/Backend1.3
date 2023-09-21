var express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/login.html', function(req,res){
    res.sendFile(__dirname + "/" + "login.html" );
})
app.get('/Registration.html', function(req,res){
    res.sendFile(__dirname + "/" + "Registration.html" );
})
app.get('/process_login',function(req,res){
   var response1 = {
        Username:req.query.Username,
        Password:req.query.Password
    };
    console.log(response1);
    res.end(JSON.stringify(response1));
})

app.get('/process_Registration',function(req,res){
   var response2 = {
        Username:req.query.Username,
        Email:req.query.Email,
        Password:req.query.Password
    };
    console.log(response2);
    res.end(JSON.stringify(response2));
});
var server = app.listen(2000,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listeninng at http://%s:%s",host,port)
})



