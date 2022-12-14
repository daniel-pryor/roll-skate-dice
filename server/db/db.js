// const config = require('./knexfile').development
// eslint-disable-next-line no-unused-vars
const connection = require('./connection')

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
  return db('users')
    .join('users_tricks', 'users.id', 'users_tricks.user_id')
    .join('tricks', 'users_tricks.trick_id', 'tricks.id')
    .where('users.id', id)
}
