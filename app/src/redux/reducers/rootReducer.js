import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authReducer from '@reducers/auth'

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer
})

export default rootReducer
