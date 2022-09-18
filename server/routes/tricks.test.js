const request = require('supertest')
const server = require('../server')
const connection = require('./connection')

const { getAllTricks } = require('../db/db')

jest.mock('../db/db')

jest.spyOn(console, 'error')

afterEach(() => {
  console.error.mockReset()
})

describe('GET /api/v1/sharks', () => {
  it('returns sharks from db', () => {
    const fakeSharks = [
      { id: 1, name: 'sharky' },
      { id: 2, name: 'baby' },
    ]
    getAllTricks.mockReturnValue(Promise.resolve(fakeSharks))
    return request(server)
      .get('/api/v1/sharks')
      .then((res) => {
        expect(res.body).toHaveLength(2)
        expect(res.body[1].name).toBe('baby')
        return null
      })
  })
})
