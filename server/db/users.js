const connection = require('./connection')

module.exports = {
  userExists,
  getUser,
  createUser,
  updateUser,
}

function userExists(username, db = connection) {
  return db('users')
    .where('username', username)
    .then((usersFound) => usersFound.length > 0)
}

function getUser(id, db = connection) {
  return db('users').select().where('auth0_id', id).first()
}

function createUser(user, db = connection) {
  return db('users').insert(user)
}

function updateUser(auth0_id, user, db = connection) {
  console.log(user)
  return db('users').update(user).where('auth0_id', auth0_id)
}
