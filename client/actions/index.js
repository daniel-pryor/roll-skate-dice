import request from 'superagent'
import difficulty from '../reducers/difficulty'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_TRICKS = 'RECEIVE_TRICKS'
export const REQUEST_TRICKS = 'REQUEST_TRICKS'

// export const SHOW_ERROR = 'SHOW_ERROR'
export const GET_DIFFICULTY = 'GET_DIFFICULTY'
export const UPDATE_DIFFICULTY = 'UPDATE_DIFFICULTY'

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
    return request
      .get('/api/v1/tricks')
      .then((res) => {
        dispatch(receiveTricks(res.body))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

// Get difficulty level

export function getDifficulty() {
  return {
    type: GET_DIFFICULTY,
  }
}

export function updateDifficulty(difficulty) {
  return {
    type: UPDATE_DIFFICULTY,
    payload: difficulty,
  }
}
