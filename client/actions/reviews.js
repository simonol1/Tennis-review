import request from 'superagent'

export const getReviews = (reviews) => {
  return {
    type: 'GET_REVIEWS',
    reviews
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
