import nock from 'nock'

import * as actions from '../actions'

test('fetchTricks', () => {
  const scope = nock('http://localhost')
    .get('/api/v1/tricks')
    .reply(200, [
      {
        data: {
          name: 'frontside 180',
        },
      },
    ])

  const fakeDispatch = jest.fn()

  return actions
    .fetchTricks('tricks')(fakeDispatch)
    .then(() => {
      expect(fakeDispatch.mock.calls).toHaveLength(2)
      expect(fakeDispatch.mock.calls[1][0].payload[0].data.name).toContain(
        'frontside 180'
      )
      scope.done()
    })
})

// jest.mock('../api')
// const mockTricks = [
//   {
//     id: 18,
//     name: 'Fakie Frontside Pop Shuvit',
//     dice1: 'Fakie',
//     dice2: 'Frontside',
//     dice3: 'Pop Shuvit',
//     description: '',
//     difficulty: 'easy',
//   },
//   {
//     id: 19,
//     name: 'Fakie Frontside 180',
//     dice1: 'Fakie',
//     dice2: 'Frontside',
//     dice3: '180',
//     description: '',
//     difficulty: 'easy',
//   },
// ]

// actions.fetchTricks.mockReturnValue(Promise.resolve(mockTricks))
// const fakeDispatch = jest.fn()
// beforeEach(() => {
//   jest.clearAllMocks()
// })

// describe('fetchTricks', () => {
//   it('dispatches request tricks at start of thunk', () => {
//     const thunkFn = actions.fetchTricks()
//     return thunkFn(fakeDispatch).then(() => {
//       const fakeDispatchFirstCallFirstArgument = fakeDispatch.mock.calls[0][0]
//       expect(fakeDispatchFirstCallFirstArgument.type).toBe(
//         actions.REQUEST_TRICKS
//       )
//     })
//   })
// })
