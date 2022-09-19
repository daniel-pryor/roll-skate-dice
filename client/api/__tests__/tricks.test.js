import nock from 'nock'
import { getTricks } from '../tricks.api'

describe('getTricks', () => {
  it('return data from local api', () => {
    const scope = nock('http://localhost')
      .get('/api/v1/tricks')
      .reply(200, { id: 1, name: 'kickflip' })
    return getTricks().then((res) => {
      expect(res.name).toContain('kickflip')
      expect(scope.isDone()).toBe(true)
    })
  })
})
