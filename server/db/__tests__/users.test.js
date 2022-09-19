const config = require('../knexfile')
const knex = require('knex')
const testCon = knex(config.test)

const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  userExists,
} = require('../users')

beforeAll(() => testCon.migrate.latest())

beforeEach(() => testCon.seed.run())

describe('test getAllUsers', () => {
  it('returns all records in users table', () => {
    return getAllUsers(testCon).then((data) => {
      expect(data).toHaveLength(3)
    })
  })
})

describe('test getUser', () => {
  it('returns selected user records in users table', () => {
    const id = 'auth0|123'
    return getUser(id, testCon).then((user) => {
      expect(user.username).toBe('tony')
    })
  })
})

describe('test userExists', () => {
  it('returns true if username already exists', () => {
    const username = 'dannyboy'
    return userExists(username, testCon).then((res) => {
      expect(res).toBe(true)
    })
  })
  it('returns false if username does not exist', () => {
    const username = 'little test boy'
    return userExists(username, testCon).then((res) => {
      expect(res).toBe(false)
    })
  })
})

describe('test createUser', () => {
  it('Creates a new user in db', () => {
    const testUser = {
      auth0_id: 'auth0|111',
      username: 'testyboy',
      name: 'Mc Test',
      location: 'Test Island',
      ability: 'easy',
    }
    return createUser(testUser, testCon).then(() => {
      return getUser(testUser.auth0_id, testCon).then((user) => {
        expect(user.username).toBe('testyboy')
      })
    })
  })
})

describe('test updateUser', () => {
  it('Updates a user in db', () => {
    const userId = 'auth0|123'
    const updatedTestUser = {
      username: 'testyboy',
      name: 'Mc Test',
      location: 'Test Island',
      ability: 'easy',
    }
    return updateUser(userId, updatedTestUser, testCon).then(() => {
      return getUser(userId, testCon).then((user) => {
        expect(user.username).toBe('testyboy')
      })
    })
  })
})
