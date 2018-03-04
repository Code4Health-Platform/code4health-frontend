import * as constants from '@constants/account'

export default function (state = {}, action) {
  switch (action.type) {
    case constants.FETCHING_ACCOUNT:
      return {
        ...state,
        isLoading: true,
        accountDetails: null
      }

    case constants.SUCCESS_FETCHING_ACCOUNT:
      return {
        ...state,
        isLoading: false,
        accountDetails: {
          isLoading: false,
          data: action.account,
          successMessage: null,
          errorMessage: null
        }
      }

    case constants.ERROR_FETCHING_ACCOUNT:
      return {...state, isLoading: false, error: action.error}

    // Change Account Details Form
    case constants.UPDATING_ACCOUNT:
      return {
        ...state,
        accountDetails: {
          ...state.accountDetails,
          successMessage: null,
          errorMessage: null,
          isLoading: true
        }
      }

    case constants.SUCCESS_UPDATING_ACCOUNT:
      return {
        ...state,
        accountDetails: {
          ...state.accountDetails,
          successMessage: 'account.accountDetails.successMessage',
          isLoading: false,
          data: {...state.accountDetails.data, ...action.newDetails}
        }
      }

    case constants.ERROR_UPDATING_ACCOUNT:
      return {
        ...state,
        accountDetails: {
          ...state.accountDetails,
          successMessage: null,
          isLoading: false,
          errorMessage: 'account.accountDetails.errorMessage'
        }
      }

    // Update password form
    case constants.UPDATING_PASSWORD:
      return {
        ...state,
        changePassword: {
          ...state.changePassword,
          successMessage: null,
          errorMessage: null,
          isLoading: true
        }
      }

    case constants.SUCCESS_UPDATING_PASSWORD:
      return {
        ...state,
        changePassword: {
          ...state.changePassword,
          successMessage: 'account.changePassword.successMessage',
          isLoading: false
        }
      }

    case constants.ERROR_UPDATING_PASSWORD:
      return {
        ...state,
        changePassword: {
          ...state.accountDetails,
          successMessage: null,
          isLoading: false,
          errorMessage: 'account.changePassword.errorMessage'
        }
      }

    // Unload account
    case constants.ACCOUNT_UNLOAD:
      return {...state, isLoading: false, accountUpdated: null, error: null, accountDetails: null, changePassword: null}
  }
  return state
}
