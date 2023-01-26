const connection = require('./connection')

module.exports = {
  userExists,
  getUser,
  createUser,
  updateUser,
  getAllUsers,
}

function getAllUsers(db = connection) {
  return db('users').select()
}

function userExists(username, db = connection) {
  return db('users')
    .where('username', username)
    .then((usersfound) => usersfound.length > 0)
}

function getUser(id, db = connection) {
  return db('users').select().where('auth0_id', id).first()
}

function createUser(user, db = connection) {
  return db('users').insert(user)
}

function updateUser(id, newData, db = connection) {
  return db('users').update(newData).where('auth0_id', id)
}
