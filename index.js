var express = require('express')
var app = express()
var logger = require('morgan')

app.use(logger('dev'))

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/hello/:person', function (req, res) {
    res.send('Hello ' + req.params.person)
  })
  
app.listen(3000)