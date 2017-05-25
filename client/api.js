import request from 'superagent'

var reviewUrl = 'http://localhost:3000/api/v1/reviews'
var playerUrl = 'http://localhost:3000/api/v1/players'


module.exports = {
  getReviews: getReviews,
  saveReview: saveReview,
  savePlayer: savePlayer,
  getPlayers
}

function getReviews(callback) {
  request
    .get(reviewUrl)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}

function saveReview(review, callback) {
  request
  .post(reviewUrl)
  .send(review)
  .end(function (err, res) {
    if (err) {
      callback(err)
    } else {
      callback(null, review)
    }
  })
}

function getPlayers (callback) {
  request
    .get(playerUrl)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}

function savePlayer(player, callback) {
  request
  .post(playerUrl)
  .send(player)
  .end(function (err, res) {
    if (err) {
      callback(err)
    } else {
      callback(null, player)
    }
  })
}
