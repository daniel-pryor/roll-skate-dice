/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('favourites').del()
  await knex('favourites').insert([
    { id: 1, trick: 'test trick' },
    { id: 2, trick: 'test trick2' },
    { id: 3, trick: 'test trick3' },
  ])
}
