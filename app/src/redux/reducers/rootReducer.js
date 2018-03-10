import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import accountReducer from '@reducers/account'
import authReducer from '@reducers/auth'
import localeReducer from '@reducers/locale'
import projectsReducer from '@reducers/projects'
import * as authConstants from '@constants/auth'

const appReducer = combineReducers({
  auth: authReducer,
  form: formReducer,
  locale: localeReducer,
  account: accountReducer,
  projects: projectsReducer
})

const rootReducer = (state, action) => {
  if (action.type === authConstants.UNAUTHENTICATED) {
    console.log('rootReducer received authConstants.UNAUTHENTICATED')
    state = {
      locale: state.locale
    }
    localStorage.clear()
  }

  return appReducer(state, action)
}

export default rootReducer
