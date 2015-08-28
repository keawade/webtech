var express = require('express');
var http = require('http');
var hbs = require('hbs');
var hbsutils = require('hbs-utils')(hbs);

var app = express();
var server = http.createServer(app);

app.set('view engine', 'hbs');
app.engine('html', hbs.__express);

hbsutils.registerWatchedPartials('./views/partials');

app.use(express.static("public"));

app.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Title!'
    });
});

app.get('/introduction', function(req, res, next) {
    res.render('introduction', {
        title: 'Introduction',
        introduction: true
    });
});

app.get('/fizzbuzz', function(req, res, next) {
    res.render('fizzbuzz', {
        title: 'Fizzbuzz',
        fizzbuzz: true
    });
});

app.get('/temperature', function(req, res, next) {
    res.render('temperature', {
        title: 'Temperature',
        temperature: true
    });
});

server.listen(process.env.PORT || 8000, process.env.IP || "0.0.0.0", function(){
    var addr = server.address();
    console.log("[webtech] listening at ", addr.address + ":" + addr.port);
});