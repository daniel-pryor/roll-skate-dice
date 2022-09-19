import {
  fetchTricks,
  SHOW_ERROR,
  RECEIVE_TRICKS,
  REQUEST_TRICKS,
} from '../tricks'

import { getTricks } from '../../api/tricks.api'

jest.mock('../../api/tricks.api')
const mockTricks = [
  { id: 1, name: 'kickflip' },
  { id: 2, name: 'ollie' },
]
getTricks.mockReturnValue(Promise.resolve(mockTricks))

const fakeDispatch = jest.fn()
beforeEach(() => {
  jest.clearAllMocks()
})

describe('fetchTricks', () => {
  it('dispatches requestTricks at start of thunk', () => {
    const thunkFn = fetchTricks()
    return thunkFn(fakeDispatch).then(() => {
      const fakeDispatchFirstCalllFirstArgument = fakeDispatch.mock.calls[0][0]
      expect(fakeDispatchFirstCalllFirstArgument.type).toBe(REQUEST_TRICKS)
      return null
    })
  })
  it('dispatches receiveTricks after api call', () => {
    return fetchTricks()(fakeDispatch).then(() => {
      const fakeDispatchSecondAction = fakeDispatch.mock.calls[1][0]
      expect(fakeDispatchSecondAction.type).toBe(RECEIVE_TRICKS)
      expect(fakeDispatchSecondAction.payload).toBe(mockTricks)
      return null
    })
  })
  it('dispatches setError if api call fails', () => {
    getTricks.mockImplementation(() => Promise.reject(new Error('failure')))
    return fetchTricks()(fakeDispatch).then(() => {
      const fakeDispatchSecondAction = fakeDispatch.mock.calls[1][0]
      expect(fakeDispatchSecondAction.type).toBe(SHOW_ERROR)
      expect(fakeDispatchSecondAction.errorMessage).toBe('failure')
    })
  })
})
