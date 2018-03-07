import axios from 'axios'
import * as constants from '@constants/projects'
import * as DashboardConstants from '@constants/dashboard'

const URL = __API + '/operinos'

// New project
export function newProjectAction ({name}, history) {
  return async (dispatch) => {
    dispatch({
      type: constants.CREATING_PROJECT
    })
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
      dispatch({
        type: constants.SUCCESS_CREATING_PROJECT,
        data: res.data
      })
      dispatch({
        type: DashboardConstants.DASHBOARD_SHOULD_REFRESH
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

export function deleteProjectAction (id) {
   console.log('deleteProjectAction', id)
  return async (dispatch) => {
    dispatch({
      type: constants.DELETING_PROJECT
    })
    try {
      const user = JSON.parse(localStorage.getItem('user'))
      const res = await axios.delete(`${URL}/${id}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        })
      dispatch({
        type: constants.SUCCESS_DELETING_PROJECT,
        data: res.data
      })
      dispatch({
        type: DashboardConstants.DASHBOARD_SHOULD_REFRESH
      })
    } catch (error) {
      dispatch({
        type: constants.ERROR_DELETING_PROJECT,
        error: error
      })
    }
  }
}
