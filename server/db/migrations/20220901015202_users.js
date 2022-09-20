/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id')
    table.string('auth0_id').primary()
    table.string('username')
    table.string('name')
    table.string('location')
    table.string('ability')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function () {
  // return knex.schema.dropTable('users')
}
