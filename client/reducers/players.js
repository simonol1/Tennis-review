function players (state = [], action) {
  switch (action.type) {
    case 'GET_PLAYERS':
      return [...action.players]  
    default:
      return state
  }
}

export default players
