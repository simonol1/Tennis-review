
import test from 'ava'
import request from 'supertest'

import app from '../../server/server'
var setupDb = require('./setup-db')

setupDb(test, function(db) {
  app.set('knex',db)
})

test.serial.cb('GET /', t => {
  request(app)
    .get('/players')
    .expect(200)
    .end((err,res) => {
      t.is(res.body.length, 1)
      t.end()
    })
})
