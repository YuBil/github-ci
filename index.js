var app = require('express')();

app.get('/', function(req, res) {
  res.statusCode = 200;
  res.json({message: 'Hello World!'});
})

app.listen(3000);
