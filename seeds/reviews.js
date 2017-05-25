exports.seed = function (knex, Promise) {
  return knex('reviews').del()
    .then(function () {
      return Promise.all([
        knex('reviews').insert({id: 100, player_id: 1, date: 12/10/2017, reviewer: 'Jonty', review: 'Keep up the practice, you will get there one day!'})
      ]);
    });
};
