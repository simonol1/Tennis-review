import request from 'superagent'

var reviewUrl = 'http://localhost:3000/api/v1/reviews'
var playerUrl = 'http://localhost:3000/api/v1/players'

module.exports = {
  getReviews: getReviews,
  saveReview,
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

function getPlayers (callback) {
  request
    .get(playerUrl)
    .end(function (err, res) {
      console.log(res.body);
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
  .end(function (err, res) {
    if (err) {
      callback(err)
    } else {
      callback(null, review)
    }
  })
}
