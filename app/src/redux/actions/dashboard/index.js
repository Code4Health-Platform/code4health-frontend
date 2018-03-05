import axios from 'axios'
import * as constants from '@constants/dashboard'
import * as authActions from '@actions/auth'

const URL = 'http://localhost:8080/api/operinos'

function receiveProjects (projects) {
  return {
    type: constants.RECEIVE_SOMETHING,
    data: projects,
    receivedAt: Date.now()
  }
}

function receiveProject (project) {
  console.log(JSON.stringify(project))
  return {
    type: constants.SUCCESS_FETCHING_PROJECT,
    data: project,
    receivedAt: Date.now()
  }
}

function isLoading () {
  console.log('isLoading')
  return {
    type: constants.IS_RECEIVING_SOMETHING
  }
}

function shouldFetchProjects (state) {
  const data = state.dashboard.data
  const lastFetch = state.dashboard.received
  const shouldRefresh = state.dashboard.shouldRefresh

  if (!data || lastFetch + 60000 < Date.now() || shouldRefresh) {
    console.log('should fetch projects')
    return true
  } else {
    console.log('should not fetch projects')
    return false
  }
}

function fetchProjects () {
  return async (dispatch) => {
    dispatch(isLoading())
    try {
      const user = JSON.parse(localStorage.getItem('user'))
      const res = await axios.get(`${URL}?page=0&size=100&sort=id,asc`, {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      })
      dispatch(receiveProjects(res.data))
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(authActions.unauthorisedAction())
      } else {
        dispatch({
          type: constants.ERROR_GETTING_SOMETHING,
          error: error
        })
      }
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

// Single Project
export function fetchSingleProjectIfNeeded (id) {
  console.log('fetchSingleProjectIfNeeded')
  return (dispatch, getState) => {
    return dispatch(fetchSingleProject(id))
  }
}

function fetchSingleProject (id) {
  return async (dispatch) => {
    dispatch(isLoading())
    try {
      const user = JSON.parse(localStorage.getItem('user'))
      const res = await axios.get(`${URL}/${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      })
      dispatch(receiveProject(res.data))
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(authActions.unauthorisedAction())
      } else {
        dispatch({
          type: constants.ERROR_GETTING_SOMETHING,
          error: error
        })
      }
    }
  }
}

export function fetchProjectConfig (id) {
  return async (dispatch) => {
    dispatch(isLoading())
    try {
      const user = JSON.parse(localStorage.getItem('user'))
      const res = await axios.get(`${URL}/${id}/config`, {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      })
      dispatch(receiveProjectConfig(res.data))
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(authActions.unauthorisedAction())
      } else {
        dispatch({
          type: constants.ERROR_GETTING_SOMETHING,
          error: error
        })
      }
    }
  }
}

function receiveProjectConfig (project) {
  console.log(JSON.stringify(project))
  return {
    type: constants.SUCCESS_FETCHING_PROJECT_CONFIG,
    data: project,
    receivedAt: Date.now()
  }
}

export function dashboardUnloadAction () {
  return {
    type: constants.DASHBOARD_UNLOAD
  }
}
