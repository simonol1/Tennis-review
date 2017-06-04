var test = require('ava')
var request = require('supertest')

var createServer = require('../../server/server')

var setupDb = require('./setup-db')

setupDb(test, function(db) {
  app.set('knex',db)
})

test('GET /', t => {
  request(app)
    .get('/players')
    .expect(200)
    .end((err,res) => {
      t.is(res.body.length, 1)
      t.end()
    })
})
