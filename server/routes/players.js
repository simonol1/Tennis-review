const express = require('express')
const router = express.Router()

const db = require('../db')

router.get('/', (req, res) => {
  db.getPlayers(req.app.get('db'))
    .then(players => {
      res.json(players)
    })
})

router.post('/', (rew, res) => {
  //what do you need to do to create a new player?
  //what is the db funciton?
  //what should be in the req.body?
  //what do I respond with? (it should be the id probablu)
})

module.exports = router
