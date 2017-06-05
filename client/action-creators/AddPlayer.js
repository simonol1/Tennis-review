import request from 'superagent'

export const addPlayerAction = (player) => {
  return {
    type: 'ADD_PLAYER_ACTION',
    player
  }
}

export function addPlayer (player) {
  return (dispatch) => {
    request
      .post(`/api/v1/players`)
      .send(player)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        //res.body should be player id, so....
        player.id = res.body
        dispatch(addPlayer(player))
      })
  }
}
