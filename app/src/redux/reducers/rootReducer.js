/* global localStorage */

import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authReducer from '@reducers/auth'
import * as constants from '@actions/auth/constants'
import dashboardReducer from '@reducers/dashboard'

const appReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  dashboard: dashboardReducer
})

const rootReducer = (state, action) => {
  if (action.type === constants.UNAUTHENTICATED) {
    state = undefined
    localStorage.removeItem('user')
  }

  return appReducer(state, action)
}

export default rootReducer
