import { combineReducers } from 'redux'
import tricks from './tricks'
import errorMessage from './errorMessage'
import waiting from './waiting'
import difficulty from './difficulty'
import loggedInUser from './loggedInUser'

const reducer = combineReducers({
  tricks,
  errorMessage,
  waiting,
  difficulty,
  loggedInUser,
})

export default reducer
