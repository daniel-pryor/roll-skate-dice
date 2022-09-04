const config = require('./knexfile').development
// eslint-disable-next-line no-unused-vars
const connection = require('knex')(config)

module.exports = { getUsers }

function getUsers(db = connection) {
  return db('users').select()
}
