/* global localStorage */

import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authReducer from '@reducers/auth'
import * as authConstants from '@constants/auth'
import dashboardReducer from '@reducers/dashboard'
import localeReducer from '@reducers/locale'

const appReducer = combineReducers({
  auth: authReducer,
  dashboard: dashboardReducer,
  form: formReducer,
  locale: localeReducer
})

const rootReducer = (state, action) => {
  if (action.type === authConstants.UNAUTHENTICATED) {
    state = undefined
    localStorage.removeItem('user')
  }

  return appReducer(state, action)
}

export default rootReducer
