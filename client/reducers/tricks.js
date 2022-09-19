import { RECEIVE_TRICKS } from '../actions/tricks'

function tricks(state = [], action) {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_TRICKS:
      return payload
    default:
      return state
  }
}

export default tricks
