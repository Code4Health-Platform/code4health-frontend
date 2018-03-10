import axios from 'axios'
import * as constants from '@constants/projects'

const URL = __API + '/operinos'

export default function NewProjectAction ({name}, history) {
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
        type: constants.PROJECTS_UPDATED
      })
    } catch (error) {
      dispatch({
        type: constants.ERROR_CREATING_PROJECT,
        error: error
      })
    }
  }
}
