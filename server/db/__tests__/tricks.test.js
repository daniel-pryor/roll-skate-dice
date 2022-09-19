const config = require('../knexfile')
const knex = require('knex')
const testCon = knex(config.test)

const { getAllTricks } = require('../tricks')

beforeAll(() => testCon.migrate.latest())

beforeEach(() => testCon.seed.run())

describe('test getAllUsers', () => {
  it('returns all records in users table', () => {
    return getAllTricks(testCon).then((data) => {
      expect(data).toHaveLength(31)
    })
  })
})
