

const addPlayer = (player, db) => {
  return db('players').insert(player)
}

const getReviews = (db) => {
  return db('reviews')
}

const getPlayers = (db) => {
  return db('players')
}

const addReview = (review, db) => {
  return db('reviews').insert(review)
}

const getReviewsByPlayerId = (id, db) => {
  return db('players').select()
  .join('reviews', 'player.id', '=', 'player_id')
  .where('players.id', id)
}


module.exports = {
  addPlayer,
  getPlayers,
  getReviews,
  addReview
}
