/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    { id: 1, name: 'Dan', location: 'Mount Maunganui', favourite_id: 1 },
    { id: 2, name: 'George', location: 'Christchurch', favourite_id: 3 },
    { id: 3, name: 'Toby', location: 'Papamoa', favourite_id: 2 },
  ])
}
