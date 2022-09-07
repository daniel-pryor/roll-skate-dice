/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      id: 1,
      name: 'Dan',
      location: 'Mount Maunganui',
      ability: 'easy',
      trick_id: [2],
    },
    {
      id: 2,
      name: 'George',
      location: 'Christchurch',
      ability: 'hard',
      trick_id: [16, 20],
    },
    {
      id: 3,
      name: 'Toby',
      location: 'Papamoa',
      ability: 'medium',
      trick_id: [12, 3, 25],
    },
  ])
}
