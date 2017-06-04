var test = require('ava')
var request = require('supertest')

var createServer = require('../../server/server')

var setupDb = require('./setup-db')

setupDb(test, createServer)

test.cb('GET /', t => {
  request(t.context.app)
    .get('/api/v1/players')
    .expect(200)
    .end((err,res) => {
      t.is(res.body.length, 1)
      t.end()
    })
})
