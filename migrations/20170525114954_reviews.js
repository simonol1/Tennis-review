
exports.up = function(knex, Promise) {
  return knex.schema.createTable('reviews', function (table){
    table.increments('id').primary()
    table.integer('player_id')
    table.integer('score')
    table.string('opponent')
    table.text('content')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('reviews')
};
