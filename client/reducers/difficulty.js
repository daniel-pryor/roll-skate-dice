import { GET_DIFFICULTY, UPDATE_DIFFICULTY } from '../actions'

const initialDifficulty = ['medium']

function difficulty(state = initialDifficulty, action) {
  const { type, payload } = action
  switch (type) {
    case GET_DIFFICULTY:
      return state
    case UPDATE_DIFFICULTY:
      return payload
  }
}

export default difficulty
