import request from 'superagent'

var reviewUrl = 'http://localhost:3000/api/v1/reviews'
var playerUrl = 'http://localhost:3000/api/v1/players'


module.exports = {
  getReviews: getReviews,
  addReview: addReview,
  addPlayer: addPlayer,
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

function addReview(review, callback) {
  request
  .post(reviewUrl)
  .send(review)
  .end(function (err, res) {
    console.log({err, res});
      callback(null, res.body)
  })
}

function getPlayers(callback) {
  request
    .get(playerUrl)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        console.log(res.body);
        callback(null, res.body || [])
      }
    })
}

function addPlayer(player, callback) {
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
