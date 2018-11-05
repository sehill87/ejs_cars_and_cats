var express = require('express');

var app = express();
console.log("Let's find out what app is", app);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/static"));

app.get('/cars', function(request,response) {
    response.render('cars');
});

app.get('/cats', function(request,response) {
    response.render('cats');
});

app.get('/cars/new', function(request,response) {
    response.render('form')
});

app.listen(8000, function () {
    console.log('listening on 8000');
});

