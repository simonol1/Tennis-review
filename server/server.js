var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var db = require('./db')

var app = express()

const players = require('./routes/players')
const reviews = require('./routes/reviews')

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../public')))

app.use('/api/v1/players', players)
app.use('/api/v1/reviews', reviews)

module.exports = (db) => {
  app.set('db', db)
  return app
}
