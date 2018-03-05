import axios from 'axios'
import * as constants from '@constants/newProject'

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
