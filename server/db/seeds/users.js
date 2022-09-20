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
      auth0_id: 'auth0|789',
      username: 'dannyboy',
      name: 'Daniel Pryor',
      location: 'Mount Maunganui',
      ability: 'easy',
    },
    {
      id: 2,
      auth0_id: 'auth0|456',
      username: 'dimmy',
      name: 'Hayden Milne',
      location: 'Christchurch',
      ability: 'hard',
    },
    {
      id: 3,
      auth0_id: 'auth0|123',
      username: 'tony',
      name: 'Tobias Read',
      location: 'Papamoa',
      ability: 'medium',
    },
  ])
}
