const express = require('express')
const router = express.Router()

const db = require('../db')

router.get('/', (req, res) => {
  db.getReviews(req.app.get('db'))
    .then(reviews => {
      res.json(reviews)
    })
    .catch(err => {
      res.status(500).send(err)
    })
})

router.post('/', (req, res) => {
  db.addReview(req.body, req.app.get('db'))
    .then(result => {
      console.log({result});
      res.status(302).json(result[0])
    })
    .catch(err => {
      console.log({err});
      res.status(500).send(err)
    })
})

router.post('/:id',(req,res) => {
  db.getReviewsByPlayerId(req.params.id, req.app.get('db'))
  .then(result => {
    res.status(302).json(result[0])
  })
  .catch(err => {
    res.status(500).send(err)
  })
})


module.exports = router
