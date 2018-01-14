/* global localStorage */

import axios from 'axios'
import * as constants from '@actions/dashboard/constants'

const URL = 'http://localhost:3001/api/protected/random-quote'

function receiveSomething (json) {
  console.log('receive something: ' + JSON.stringify(json))
  return {
    type: constants.RECEIVE_SOMETHING,
    data: json,
    receivedAt: Date.now()
  }
}

function isLoading () {
  return {
    type: constants.IS_RECEIVING_SOMETHING
  }
}

export function fetchSomething () {
  console.log('start fetching')
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
      console.log('error')
      dispatch({
        type: constants.ERROR_GETTING_SOMETHING,
        payload: 'Error getting something'
      })
    }
  }
}
