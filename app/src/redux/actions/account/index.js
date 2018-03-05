import axios from 'axios'
import * as constants from '@constants/account'

const URL = __API

export function getAccountDetails () {
  return async (dispatch) => {
    dispatch({type: constants.FETCHING_ACCOUNT})
    try {
      const user = JSON.parse(localStorage.getItem('user'))
      const res = await axios.get(
        `${URL}/account`, {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        })

      dispatch({type: constants.SUCCESS_FETCHING_ACCOUNT, account: res.data})
    } catch (error) {
      dispatch({
        type: constants.ERROR_FETCHING_ACCOUNT,
        error: error.response.data
      })
    }
  }
}

export function accountUnload () {
  return {
    type: constants.ACCOUNT_UNLOAD
  }
}

export function updateAccountDetails ({firstName, lastName, email, login}) {
  return async (dispatch) => {
    dispatch({type: constants.UPDATING_ACCOUNT})
    try {
      const user = JSON.parse(localStorage.getItem('user'))
      await axios.post(
        `${URL}/account`, {
          activated: true,
          email: email,
          firstName: firstName,
          imageUrl: null,
          langKey: 'en',
          lastName: lastName,
          login: login
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        })
      dispatch({
        type: constants.SUCCESS_UPDATING_ACCOUNT,
        newDetails: {
          firstName: firstName,
          lastName: lastName,
          email: email
        }
      })
    } catch (error) {
      dispatch({
        type: constants.ERROR_UPDATING_ACCOUNT,
        error: error.response.data
      })
    }
  }
}

export function changePassword ({newPassword, confirmPassword}) {
  return async (dispatch) => {
    dispatch({type: constants.UPDATING_PASSWORD})
    try {
      const user = JSON.parse(localStorage.getItem('user'))
      await axios.post(
        `${URL}/account/change_password`,
        newPassword,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
            'Content-Type': 'text/plain'
          }
        })

      dispatch({
        type: constants.SUCCESS_UPDATING_PASSWORD
      })
    } catch (error) {
      dispatch({
        type: constants.ERROR_UPDATING_PASSWORD,
        error: error.response.data
      })
    }
  }
}
