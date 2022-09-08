import { combineReducers } from 'redux'
import tricks from './tricks'
import errorMessage from './errorMessage'
import waiting from './waiting'
import difficulty from './difficulty'

const reducer = combineReducers({
  tricks,
  errorMessage,
  waiting,
  difficulty,
})

export default reducer
