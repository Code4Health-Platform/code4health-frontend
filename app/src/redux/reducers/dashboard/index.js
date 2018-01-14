import * as constants from '@actions/dashboard/constants'

export default function (state = {}, action) {
  switch (action.type) {
    case constants.RECEIVE_SOMETHING:
      return {...state, data: action.data, isLoading: false}
    case constants.IS_RECEIVING_SOMETHING:
      return {...state, isLoading: true}
  }
  return state
}
