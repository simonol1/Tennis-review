exports.seed = function (knex, Promise) {
  return knex('players').del()
    .then(function () {
      return Promise.all([
        knex('players').insert({id: 1, name: 'Simon', email: 'simon@simon.com', Mobile: '02734493339'})
      ]);
    });
};
