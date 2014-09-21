var express = require('express');

var app = express();
app.use(express.static(__dirname + '/build'));

app.set('views', __dirname + '/templates');
app.set('view engine', 'jade');

app.get('/', function(req, res) {
    res.render('main', {});
});

app.use(function(err, req, res, next) {
    res.send(err.stack);
});

if (!module.parent) {
    var port = process.env.PORT || 3000;
    app.listen(port);
    console.log('Server started on port ' + port);
}
