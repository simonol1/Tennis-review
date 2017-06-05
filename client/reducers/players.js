function players (state = [], action) {
  switch (action.type) {
    case 'GET_PLAYERS':
      return [...action.players]

    case 'ADD_PLAYER':
      return [...action.player]

    default:
      return state
  }
}

export default players
