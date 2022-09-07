import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_TRICKS = 'RECEIVE_TRICKS'
export const REQUEST_TRICKS = 'REQUEST_TRICKS'

export function requestTricks() {
  return {
    type: REQUEST_TRICKS,
  }
}

export function receiveTricks(tricks) {
  return {
    type: RECEIVE_TRICKS,
    payload: tricks,
  }
}

export function showError(errorMessage) {
  return {
    type: SHOW_ERROR,
    payload: errorMessage,
  }
}

export function fetchTricks() {
  return (dispatch) => {
    dispatch(requestTricks())
    return request
      .get('/v1/tricks')
      .then((res) => {
        dispatch(receiveTricks(res.body))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
