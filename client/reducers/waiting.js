import { SHOW_ERROR, REQUEST_TRICKS, RECEIVE_TRICKS } from '../actions/tricks'

function waiting(state = false, action) {
  const { type } = action

  switch (type) {
    case REQUEST_TRICKS:
      return true
    case RECEIVE_TRICKS:
      return false
    case SHOW_ERROR:
      return false
    default:
      return state
  }
}

export default waiting
