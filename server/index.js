var serverConfig = require('./server')

var Knex = require('knex')
var knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']
const knex = Knex(knexConfig)

var PORT = process.env.PORT || 3000
var server = serverConfig(knex)

server.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
