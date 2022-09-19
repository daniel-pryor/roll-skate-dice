import request from 'superagent'

const rootUrl = '/api/v1'

export function getTricks() {
  return request
    .get(`${rootUrl}/tricks`)
    .then((res) => {
      return res
    })
    .catch((err) => {
      console.error(err.message)
    })
}
