const express = require('express')
const router = express.Router()

const db = require('../db')

router.get('/', (req, res) => {
  db.getPlayers(req.app.get('db'))
    .then(players => {
      res.json(players)
    })
})

router.post('/', (req, res) => {
  const player = {
    player: req.body.name,
    email: req.body.email,
    mobile: req.body.mobile
  }
  db.addPlayer(player)
    .then(result => {
      res.json(data)
    })
})



module.exports = router


//what do you need to do to create a new player?
//what is the db funciton?
//what should be in the req.body?
//what do I respond with? (it should be the id probablu)
