const express = require('express')
const router = express.Router()

const db = require('../db')

router.post('/', (req, res) => {
  console.log(req.body);
  //listens for review posts
})

module.exports = router
