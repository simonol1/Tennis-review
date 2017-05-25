const express = require('express')
const router = express.Router()

const db = require('../db')

router.get('/', (req, res) => {
  db.getPlayers(req.app.get('db'))
    .then(players => {
      res.json(players)
    })
    .catch(err => {
      res.status(500).send(err)
    })
})

router.post('/', (req, res) => {
  console.log(req.body);
  db.addPlayer(req.body, req.app.get('db'))
    .then(result => {
      res.status(302).json(result[0])
    })
    .catch(err => {
      res.status(500).send(err)
    })
})






module.exports = router
