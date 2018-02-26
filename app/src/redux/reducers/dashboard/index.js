import * as constants from '@constants/dashboard'

export default function (state = {}, action) {
  switch (action.type) {
    case constants.RECEIVE_SOMETHING:
      return {...state, projects: action.data, isLoading: false, received: action.receivedAt}
    case constants.IS_RECEIVING_SOMETHING:
      return {...state, isLoading: true, shouldRefresh: false}
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
    case constants.SUCCESS_CREATING_PROJECT:
      return {...state, isLoading: false, shouldRefresh: true, success: 'new project created'}
    case constants.SUCCESS_FETCHING_PROJECT:
      return {...state, isLoading: false, project: action.data}
    case constants.SUCCESS_FETCHING_PROJECT_CONFIG:
      return {...state, isLoading: false, config: action.data}
    case constants.DASHBOARD_UNLOAD:
      return {...state, isLoading: false, shouldRefresh: null, success: null, error: null, project: null}
  }
  return state
}
