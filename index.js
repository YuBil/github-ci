const app = require('express')()
const verifyToken = require('./middleware/verifyToken')

app.use(verifyToken)

app.get('/v1/foo', function(req, res) {
  res.json({
    message: 'foo',
    message1: null
  });
})

app.get('/v1/bar', function(req, res) {
  const id = req.query.id;
  res.json({
    id: 100500
  });
})

app.listen(3000)
