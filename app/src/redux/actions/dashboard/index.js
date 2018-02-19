/* global localStorage */

import axios from 'axios'
import * as constants from '@constants/dashboard'

const URL = 'http://localhost:8080/api/operinos'

function receiveProjects (projects) {
  return {
    type: constants.RECEIVE_SOMETHING,
    data: projects,
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
  const shouldRefresh = state.dashboard.shouldRefresh
  if (!data || lastFetch + 6000 < Date.now() || shouldRefresh) {
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
      const res = await axios.get(`${URL}?page=0&size=20&sort=id,asc`, {
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

export function newProjectAction ({name}, history) {
  return async (dispatch) => {
    dispatch(isLoading())
    try {
      const user = JSON.parse(localStorage.getItem('user'))
      const res = await axios.post(`${URL}`, {
        name: name,
        active: true,
        provision: true
      }, {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      })
      history.push('/projects')
      dispatch({
        type: constants.SUCCESS_CREATING_PROJECT,
        data: res.data
      })
    } catch (error) {
      dispatch({
        type: constants.ERROR_CREATING_PROJECT,
        error: error
      })
    }
  }
}

export function newProjectUnloadAction () {
  return {
    type: constants.CREATING_PROJECT_UNLOAD
  }
}

export function dashboardUnloadAction () {
  return {
    type: constants.DASHBOARD_UNLOAD
  }
}
