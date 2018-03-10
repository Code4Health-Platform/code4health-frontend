import axios from 'axios'
import * as constants from '@constants/projects'
import * as authActions from '@actions/auth'

const URL = __API + '/operinos'

function isLoading () {
  console.log('isLoading')
  return {
    type: constants.FETCHING_ALL_PROJECTS
  }
}

function shouldFetchProjects (state) {
  const data = state.projects.data
  const lastFetch = state.projects.received
  const shouldRefresh = state.projects.shouldRefresh

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
      dispatch({
        type: constants.SUCCESS_FETCHING_ALL_PROJECTS,
        data: res.data,
        receivedAt: Date.now()
      })
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(authActions.unauthorisedAction())
      } else {
        dispatch({
          type: constants.ERROR_FETCHING_ALL_PROJECTS,
          error: error
        })
      }
    }
  }
}

export default function ViewAllProjectsAction () {
  return (dispatch, getState) => {
    if (shouldFetchProjects(getState())) {
      return dispatch(fetchProjects())
    }
  }
}
