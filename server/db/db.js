const config = require('./knexfile').development
// eslint-disable-next-line no-unused-vars
const connection = require('knex')(config)

module.exports = { getUsers, getUserById }

function getUsers(db = connection) {
  return db('users').select()
}

function getUserById(id, db = connection) {
  return db('users').where('id', id).select()
}
