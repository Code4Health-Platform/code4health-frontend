import axios from 'axios'
import * as constants from '@constants/projects'
import * as authActions from '@actions/auth'

const URL = __API + '/operinos'

export default function ViewSingleProjectAction (id) {
  console.log('fetchSingleProjectIfNeeded')
  return (dispatch, getState) => {
    dispatch(fetchSingleProject(id))
    dispatch(fetchProjectConfig(id))
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
          type: constants.ERROR_FETCHING_PROJECT,
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
          type: constants.ERROR_FETCHING_PROJECT_CONFIG,
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
    type: constants.FETCHING_PROJECT
  }
}
