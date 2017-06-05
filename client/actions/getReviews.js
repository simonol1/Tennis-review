import request from 'superagent'

export const getReviewsAction = (reviews) => {
  return {
    type: 'GET_REVIEWS_ACTION',
    players
  }
}

export function getReviews () {
  return (dispatch) => {
    request
      .get(`/api/v1/reviews`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(getReviews(res.body))
      })
  }
}
