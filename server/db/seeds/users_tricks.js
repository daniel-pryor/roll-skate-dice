/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users_tricks').del()
  await knex('users_tricks').insert([
    { user_auth0_id: 1, trick_id: 2 },
    { user_auth0_id: 1, trick_id: 3 },
    { user_auth0_id: 1, trick_id: 1 },
  ])
}
