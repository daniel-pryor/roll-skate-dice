const config = require('./knexfile').development
// eslint-disable-next-line no-unused-vars
const connection = require('knex')(config)

module.exports = { getUsers, getUserById, getFavouritesByUserId }

function getUsers(db = connection) {
  return db('users').select()
}

function getUserById(id, db = connection) {
  return db('users').where('id', id).select()
}

function getFavouritesByUserId(id, db = connection) {
  return db('users')
    .where('users.id', id)
    .join('favourites', 'favourites.id', 'users.favourite_id')
    .select('users.id as userId', 'trick', 'name')
}
