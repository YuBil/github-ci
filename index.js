var app = require('express')();

app.get('/v1/foo', function(req, res) {
  res.statusCode = 200;
  res.contentType = 'application/json';
  res.json({message: 'Hello World!'});
})

app.listen(3000);
