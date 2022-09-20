/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('users_tricks', (table) => {
    table.string('user_id')
    table.integer('trick_id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function () {
  // return knex.schema.dropTable('users_tricks')
}
