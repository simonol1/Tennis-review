import request from 'superagent'

export const addReviewAction = (reviews) => {
  return {
    type: 'ADD_REVIEWS_ACTION',
    players
  }
}

export function addReview () {
  return (dispatch) => {
    request
      .get(`/api/v1/reviews`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(addReview(res.body))
      })
  }
}
