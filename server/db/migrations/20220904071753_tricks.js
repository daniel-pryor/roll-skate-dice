/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('tricks', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('dice1')
    table.string('dice2')
    table.string('dice3')
    table.string('description')
    table.string('difficulty')
    table.string('video')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function () {
  // return knex.schema.dropTable('tricks')
}
