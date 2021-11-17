const app = require('express')()

const msg = {
  message: 'foo'
}

app.get('/v1/foo', function(req, res) {
  res.json(msg);
})

app.listen(3000)
