var express = require('express');
// body-parser
var bodyParser = require('body-parser');

var fs = require('fs');

var app = express();

var cors = require('cors');
// Set port
app.set('port', process.env.PORT || 8080);

app.use(cors());

// Config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/output', function (req, res) {
    // res.json({ querystring_breed: req.query.file });
    console.log(req.query.file);
    fs.readFile('sourceCampathonApp/' + req.query.file, function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });
});

app.post('/input', function (req, res) {

    var fs = require('fs');
    fs.writeFile('' + req.body.file, req.body.text, function (err) {
        if (err) throw err;
        res.json({ success: true });
        console.log(req.body);
        console.log('Updated!');
    });
});

app.listen(app.get('port'), function () {
    console.log('Server started on localhost:' + app.get('port') + '; Press Ctrl-C to terminate.');
});