const app = require('express')()

const msg = {
  message: 'foo',
  message1: null
}

app.get('/v1/foo', function(req, res) {
  res.json(msg);
})

app.listen(3000)
