
getPlayers = (db) => {
  return db('players')
}

addPlayer = (db) => {
  return db('player').insert(playerdetails)
    .then((result) => {
      return result
    })
}

var playerdetails = {
  name: '',
  email: '',
  mobile: ''
}


module.exports = {
  getPlayers,
  addPlayer
}
