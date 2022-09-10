var express             = require('express');
var app                 = express();
var path                = require('path');
var ejs                 = require("ejs");  

app.set('views', path.join(__dirname, 'app/'));  
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname,'app')))

app.get('/', function (req, res) {
   res.render("dynamic-data1");
})


var server = app.listen(7777, function () {
 
  var host = server.address().address;
  var port = server.address().port;
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port);
 
})