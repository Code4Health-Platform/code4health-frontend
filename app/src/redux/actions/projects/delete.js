import axios from 'axios'
import * as constants from '@constants/projects'

const URL = __API + '/operinos'

export default function DeleteProjectAction (id) {
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
        type: constants.PROJECTS_UPDATED
      })
    } catch (error) {
      dispatch({
        type: constants.ERROR_DELETING_PROJECT,
        error: error
      })
    }
  }
}
