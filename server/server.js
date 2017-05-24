var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')

var server = express()

const players = require('./routes/players')
const reviews = require('./routes/reviews')

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/players', players)
server.use('/api/v1/reviews', reviews)

module.exports = (db) => {
  server.set('db', db)
  return server
}
