import * as constants from '@constants/auth'

export default function (state = {}, action) {
  switch (action.type) {
    case constants.AUTHENTICATED:
      return {...state, authenticated: true}
    case constants.LOG_IN_SUCCESS:
      return {...state, authenticated: true}
    case constants.UNAUTHENTICATED:
      console.log('unauthenticated')
      return {...state, authenticated: false}
    case constants.LOG_IN_ERROR:
      return {...state, errorMessage: action.payload}
    case constants.SIGN_UP_ERROR:
      return {...state, sign_up_error: action.payload}
    case constants.LOG_IN_UNLOAD:
      return {...state, log_in_error: null}
    case constants.SIGN_UP_SUCCESS:
      return {...state, success: true}
    case constants.SIGN_UP_UNLOAD:
      return {...state, sign_up_error: null}
    case constants.ACTIVATION_SUCCESS:
      return {...state, activation_successful: true, loading: false}
    case constants.ACTIVATION_IN_PROGRESS:
      return {...state, loading: true}
    case constants.ACTIVATION_ERROR:
      return {...state, error: true, loading: false, errorMessage: 'unable to activate account'}
    case constants.PASSWORD_RESET_ERROR:
      return {...state, password_reset_error: action.payload}
    case constants.PASSWORD_RESET_UNLOAD:
      return {...state, password_reset_error: null}
  }
  return state
}
