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

function userExists(currentUsername, username, db = connection) {
  return db('users')
    .where('username', username)
    .then((usersFound) => {
      if (currentUsername == '' && usersFound.length > 0) {
        return true
      } else if (currentUsername !== username && usersFound.length > 0) {
        return true
      } else return false
    })
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
