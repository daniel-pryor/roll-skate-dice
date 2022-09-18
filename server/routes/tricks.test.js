const request = require('supertest')
const server = require('../server')

const { getAllTricks } = require('../db/tricks')

jest.mock('../db/tricks')

jest.spyOn(console, 'error')

afterEach(() => {
  console.error.mockReset()
})

describe('GET /api/v1/tricks', () => {
  it('returns tricks from db', () => {
    const fakeTricks = [
      { id: 1, name: 'kickflip' },
      { id: 2, name: 'ollie' },
    ]
    getAllTricks.mockReturnValue(Promise.resolve(fakeTricks))
    return request(server)
      .get('/api/v1/tricks')
      .then((res) => {
        expect(res.body).toHaveLength(2)
        expect(res.body[1].name).toBe('ollie')
        return null
      })
  })
  it('returns status 500 when error', () => {
    getAllTricks.mockImplementation(() =>
      Promise.reject(new Error('did not work'))
    )
    console.error.mockImplementation(() => {})
    return request(server)
      .get('/api/v1/tricks')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(console.error).toHaveBeenCalledWith('did not work')
        return null
      })
  })
})
