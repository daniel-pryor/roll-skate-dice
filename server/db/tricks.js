const connection = require('./connection')

module.exports = { getFavouritesByUserId, getAllTricks }

function getAllTricks(db = connection) {
  return db('tricks').select()
}

function getFavouritesByUserId(id, db = connection) {
  return db('users')
    .join('users_tricks', 'users.id', 'users_tricks.user_id')
    .join('tricks', 'users_tricks.trick_id', 'tricks.id')
    .where('users.id', id)
}
