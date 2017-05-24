
exports.up = function(knex, Promise) {
  return knex.schema.createTable('players', function (table){
    table.increments('id').primary()
    table.string('name')
    table.string('email')
    table.integer('mobile')
    table.text('review')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('players')
};
