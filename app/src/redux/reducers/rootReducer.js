/* global localStorage */

import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import authReducer from '@reducers/auth'
import dashboardReducer from '@reducers/dashboard'
import localeReducer from '@reducers/locale'
import * as authConstants from '@constants/auth'

const appReducer = combineReducers({
  auth: authReducer,
  dashboard: dashboardReducer,
  form: formReducer,
  locale: localeReducer
})

const rootReducer = (state, action) => {
  if (action.type === authConstants.UNAUTHENTICATED) {
    console.log('rootReducer received authConstants.UNAUTHENTICATED')
    state.auth = {}
    state.dashboard = {}
    localStorage.clear()
  }

  return appReducer(state, action)
}

export default rootReducer
