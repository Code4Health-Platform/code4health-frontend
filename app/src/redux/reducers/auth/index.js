import * as constants from '@constants/auth'

export default function (state = {}, action) {
  switch (action.type) {
    case constants.AUTHENTICATED:
      return { ...state, authenticated: true }
    case constants.LOG_IN_SUCCESS:
      return { ...state, authenticated: true }
    case constants.UNAUTHENTICATED:
      return { ...state, authenticated: false }
    case constants.LOG_IN_ERROR:
      return { ...state, log_in_error: action.payload }
    case constants.SIGN_UP_ERROR:
      return { ...state, sign_up_error: action.payload }
    case constants.LOG_IN_UNLOAD:
      return { ...state, log_in_error: null }
    case constants.SIGN_UP_SUCCESS:
      return { ...state, authenticated: true }
    case constants.SIGN_UP_UNLOAD:
      return { ...state, sign_up_error: null }
  }
  return state
}
