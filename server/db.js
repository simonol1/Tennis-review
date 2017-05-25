
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

getReviews = (db) => {
  return db('reviews')
  .select()
  .join('players', 'reviews.id', 'players_id')
}

module.exports = {
  getPlayers,
  addPlayer,
  getReviews
}
