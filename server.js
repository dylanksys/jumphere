var express = require ('express');

var feedme = require('../routers/feedme');
var a = require('../routers/a');

var app = express();

app.use('/', feedme);
app.use('/', a);

app.listen(8000, function () {
  console.log('works listening on port 8000');
};
