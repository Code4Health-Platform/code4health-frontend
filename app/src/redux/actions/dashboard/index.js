/* global localStorage */

import axios from 'axios'
import * as constants from '@actions/dashboard/constants'

const URL = 'http://localhost:3001/api/protected/random-quote'

function receiveSomething (something) {
  return {
    type: constants.RECEIVE_SOMETHING,
    data: something,
    receivedAt: Date.now()
  }
}

function isLoading () {
  return {
    type: constants.IS_RECEIVING_SOMETHING
  }
}

function shouldFetchSomething (state) {
  const data = state.dashboard.data
  if (data) {
    return false
  } else {
    return true
  }
}

function fetchSomething () {
  return async (dispatch) => {
    dispatch(isLoading())
    try {
      const user = JSON.parse(localStorage.getItem('user'))
      const res = await axios.get(`${URL}`, {
        headers: {
          Authorization: `Bearer ${user.access_token}`
        }
      })
      dispatch(receiveSomething(res.data))
    } catch (error) {
      dispatch({
        type: constants.ERROR_GETTING_SOMETHING,
        error: error
      })
    }
  }
}

export function fetchSomethingIfNeeded () {
  return (dispatch, getState) => {
    if (shouldFetchSomething(getState())) {
      return dispatch(fetchSomething())
    }
  }
}
