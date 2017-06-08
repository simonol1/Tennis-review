import request from 'superagent'

//doesn't need to be exported
const getPlayersAction = (players) => {
  return {
    type: 'GET_PLAYERS_ACTION',
    players
  }
}

//export default
export default function getPlayers () {
  return (dispatch) => {
    request
      .get(`/api/v1/players`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(getPlayersAction(res.body))
      })
  }
}
