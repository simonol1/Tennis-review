
getPlayers = (db) => {
  return db('players')
}

addPlayer = (player, db) => {
  return db('players').insert(player)
}

getReviews = (db) => {
  return db('reviews')
}

addReview = (review, db) => {
  return db('review').insert(review)
}

getReviewsByPlayerId = (id, db) => {
  return db('players').select()
  .join('reviews', 'player.id', '=', 'player_id')
  .where('players.id', id)
}

module.exports = {
  getPlayers,
  addPlayer,
  getReviews,
  addReview
}
