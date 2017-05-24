import request from 'superagent'

var reviewUrl = 'http://localhost:3000/#/Reviews'

module.exports = {
  getReviews: getReviews
}

function getReviews(callback) {
  request
    .get(getReviews)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}
