import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authReducer from '@reducers/auth'
import dashboardReducer from '@reducers/dashboard'

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  dashboard: dashboardReducer
})

export default rootReducer
