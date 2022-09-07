import { combineReducers } from 'redux'
import tricks from './tricks'
import errorMessage from './errorMessage'
import waiting from './waiting'

const reducer = combineReducers({
  tricks,
  errorMessage,
  waiting,
})

export default reducer
