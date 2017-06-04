

const addPlayer = (player, db) => {
  return db('players').insert(player)
}

const getReviews = (db) => {
  return db('reviews')
      .join('players', 'reviews.player_id', '=', 'players.id')
}

const getPlayers = (db) => {
  return db('players')
}

const addReview = (review, db) => {
  return db('reviews').insert(review)
}

const getReviewsByPlayerId = (id, db) => {
  return db('reviews')
  .join('players', 'reviews.player_id', '=', 'players.id')
  .where('players.id', id)
}


module.exports = {
  addPlayer,
  getPlayers,
  getReviews,
  addReview,
  getReviewsByPlayerId
}
