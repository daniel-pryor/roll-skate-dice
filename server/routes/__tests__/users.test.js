const request = require('supertest')
// const { screen } = require('@testing-library/dom')
const server = require('../../server')
const { getUser, getAllUsers } = require('../../db/users')
const checkJwt = require('../../auth0')

jest.mock('../../db/users')
jest.mock('../../auth0')

jest.spyOn(console, 'error')

beforeAll(() => {
  checkJwt.mockImplementation((req, res, next) => {
    req.user = { sub: 'testUserId' }
    next()
  })
})
afterEach(() => {
  console.error.mockReset()
})

describe('GET /singleuser', () => {
  it('returns user from db', () => {
    const fakeUser = { id: 1, name: 'Otago', auth0_id: '123' }
    getUser.mockReturnValue(Promise.resolve(fakeUser))

    return request(server)
      .get('/api/v1/users/singleuser', checkJwt)
      .set('Authorization', `Bearer 123456`)
      .then((res) => {
        expect(res.status).toBe(200)
      })
  })

  it('return status 500 and consoles error when problem', () => {
    getUser.mockImplementation(() =>
      Promise.reject(new Error('it did not work'))
    )
    console.error.mockImplementation(() => {})
    return request(server)
      .get('/api/v1/users/singleuser', checkJwt)
      .set('Authorization', `Bearer 111`)
      .then((res) => {
        expect(res.status).toBe(500)
        expect(console.error).toHaveBeenCalledWith('it did not work')
      })
  })
})

describe('GET all users from db', () => {
  it('returns all users in db', () => {
    const fakeUsers = [
      {
        auth0_id: 'auth0|789',
        username: 'dannyboy',
        name: 'Daniel Pryor',
        location: 'Mount Maunganui',
        ability: 'easy',
      },
      {
        auth0_id: 'auth0|456',
        username: 'dimmy',
        name: 'Hayden Milne',
        location: 'Christchurch',
        ability: 'hard',
      },
    ]
    getAllUsers.mockReturnValue(Promise.resolve(fakeUsers))

    return request(server)
      .get('/api/v1/users')
      .then((res) => {
        expect(res.status).toBe(200)
      })
  })

  it('return status 500 and consoles error when problem', () => {
    getAllUsers.mockImplementation(() =>
      Promise.reject(new Error('it did not work'))
    )
    console.error.mockImplementation(() => {})
    return request(server)
      .get('/api/v1/users')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(console.error).toHaveBeenCalledWith('it did not work')
      })
  })
})
