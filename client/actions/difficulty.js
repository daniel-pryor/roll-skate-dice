export const GET_DIFFICULTY = 'GET_DIFFICULTY'
export const UPDATE_DIFFICULTY = 'UPDATE_DIFFICULTY'

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
