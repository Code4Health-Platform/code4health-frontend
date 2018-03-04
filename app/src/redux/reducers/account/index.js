import * as constants from '@constants/account'

export default function (state = {}, action) {
  switch (action.type) {
    case constants.FETCHING_ACCOUNT:
      return {...state, isLoading: true}
    case constants.SUCCESS_FETCHING_ACCOUNT:
      return {...state, isLoading: false, details: action.account}
    case constants.SUCCESS_UPDATING_ACCOUNT:
      return {...state, isLoading: false, details: {...state.details, ...action.newDetails}}
    case constants.ERROR_FETCHING_ACCOUNT:
      return {...state, isLoading: false, error: action.error}
    case constants.ACCOUNT_UNLOAD:
      return {...state, isLoading: false, success: null, error: null, details: null}
  }
  return state
}
