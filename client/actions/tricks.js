import { getTricks } from '../api/tricks.api'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_TRICKS = 'RECEIVE_TRICKS'
export const REQUEST_TRICKS = 'REQUEST_TRICKS'

// get all tricks

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
    return getTricks()
      .then((res) => {
        console.log(res)
        dispatch(receiveTricks(res.body))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
