function reviews (state = [], action) {
  switch (action.type) {
    case 'GET_REVIEWS':
      return [...action.reviews]

    case 'ADD_REVIEW':
      return [...action.review]
    default:
      return state
  }
}

export default reviews
