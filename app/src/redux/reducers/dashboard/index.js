import * as constants from '@actions/dashboard/constants'

export default function (state = {}, action) {
  switch (action.type) {
    case constants.RECEIVE_SOMETHING:
      return {...state, data: action.data, isLoading: false}
    case constants.IS_RECEIVING_SOMETHING:
      return {...state, isLoading: true}
    case constants.ERROR_GETTING_SOMETHING:
      if (action.error.response) {
        console.log(action.error.response.data)
        console.log(action.error.response.status)
        console.log(action.error.response.headers)
      } else if (action.error.request) {
        console.log(action.error.request)
      } else {
        console.log('Error', action.error.message)
      }
      return {...state, isError: true, isLoading: false, error: action.error}
  }
  return state
}
