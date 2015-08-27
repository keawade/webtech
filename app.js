var express = require('express');
var http = require('http');
var hbs = require('hbs');

var app = express();
var server = http.createServer(app);

app.set('view engine', 'hbs');
app.engine('html', hbs.__express);

app.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Title!'
    });
});

server.listen(process.env.PORT || 8000, process.env.IP || "0.0.0.0", function(){
    var addr = server.address();
    console.log("[webtech] listening at ", addr.address + ":" + addr.port);
});