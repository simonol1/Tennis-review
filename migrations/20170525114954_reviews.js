
exports.up = function(knex, Promise) {
  return knex.schema.createTable('reviews', function (table){
    table.increments('player_id').primary()
    table.increments('id')
    table.string('date')
    table.string('reviewer')
    table.text('review')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('reviews')
};
