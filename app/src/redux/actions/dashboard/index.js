/* global localStorage */

import axios from 'axios'
import * as constants from '@constants/dashboard'

const URL = 'http://localhost:8080/api/operinos?page=0&size=20&sort=id,asc'

function receiveProjects (something) {
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

function shouldFetchProjects (state) {
  const data = state.dashboard.data
  const lastFetch = state.dashboard.received

  if (!data || lastFetch + 6000 < Date.now()) {
    console.log('should fetch projects')
    return true
  } else {
    return false
  }
}

function fetchProjects () {
  return async (dispatch) => {
    dispatch(isLoading())
    try {
      const user = JSON.parse(localStorage.getItem('user'))
      const res = await axios.get(`${URL}`, {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      })
      dispatch(receiveProjects(res.data))
    } catch (error) {
      dispatch({
        type: constants.ERROR_GETTING_SOMETHING,
        error: error
      })
    }
  }
}

export function fetchProjectsIfNeeded () {
  return (dispatch, getState) => {
    if (shouldFetchProjects(getState())) {
      return dispatch(fetchProjects())
    }
  }
}
