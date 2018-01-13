import * as constants from '@actions/auth/constants'

export default function (state = {}, action) {
  switch (action.type) {
    case constants.AUTHENTICATED:
      return { ...state, authenticated: true }
    case constants.UNAUTHENTICATED:
      return { ...state, authenticated: false }
    case constants.AUTHENTICATION_ERROR:
      return { ...state, error: action.payload }
  }
  return state
}
