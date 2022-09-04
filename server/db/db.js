const config = require('./knexfile').development
// eslint-disable-next-line no-unused-vars
const connection = require('knex')(config)

module.exports = { getUsers, getUserById, getFavouritesByUserId, getAllTricks }

function getUsers(db = connection) {
  return db('users').select()
}

function getUserById(id, db = connection) {
  return db('users')
    .where('users.id', id)
    .join('tricks', 'users.trick_id', 'tricks.id')
    .select(
      'users.id as userId',
      'users.name as userName',
      'tricks.id as trickId',
      'tricks.name as trickName',
      'ability',
      'location'
    )
}

function getAllTricks(db = connection) {
  return db('tricks').select()
}

function getFavouritesByUserId(id, db = connection) {
  return db('users').where('users.id', id).join('tricks')
}
