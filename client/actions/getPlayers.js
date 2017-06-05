import request from 'superagent'

export const getPlayersAction = (players) => {
  return {
    type: 'GET_PLAYERS_ACTION',
    players
  }
}

export function getPlayers () {
  return (dispatch) => {
    request
      .get(`/api/v1/players`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(getPlayers(res.body))
      })
  }
}
