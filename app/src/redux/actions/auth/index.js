/* global localStorage */

import axios from 'axios'
import * as constants from '@constants/auth'
// import History from '@history'

const URL = 'http://localhost:8080/api'

export function logInAction ({username, password}, history) {
  return async (dispatch) => {
    try {
      const res = await axios.post(`${URL}/authenticate`, { username: username, password: password })
      dispatch({type: constants.LOG_IN_SUCCESS})
      const user = {
        token: res.data.id_token
      }
      console.log(res)
      console.log(JSON.stringify(res))
      localStorage.setItem('user', JSON.stringify(user))
      history.push('/projects')
    } catch (error) {
      console.log(error)
      console.log(JSON.stringify(error))
      dispatch({
        type: constants.LOG_IN_ERROR,
        payload: error.response.data
      })
    }
  }
}

export function unauthorisedAction () {
  console.log('unauthorisedAction')
  return {
    type: constants.UNAUTHENTICATED
  }
}

export function logInUnloadAction () {
  return {
    type: constants.LOG_IN_UNLOAD
  }
}

export function signUpUnloadAction () {
  return {
    type: constants.SIGN_UP_UNLOAD
  }
}

export function passwordResetUnloadAction () {
  return {
    type: constants.PASSWORD_RESET_UNLOAD
  }
}

export function logOutAction () {
  return {
    type: constants.UNAUTHENTICATED
  }
}

export function signUpAction ({email, username, password}, history) {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        `${URL}/register`,
        {
          email: email,
          langKey: 'en',
          login: username,
          password: password
        }
      )
      console.log(res)
      console.log(JSON.stringify(res))
      dispatch({type: constants.SIGN_UP_SUCCESS})
    } catch (error) {
      console.log(error)
      console.log(JSON.stringify(error))
      dispatch({
        type: constants.SIGN_UP_ERROR,
        payload: error.response.data
      })
    }
  }
}

export function passwordResetAction ({email}, history) {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        `${URL}/account/reset_password/init`,
        email
      )
      dispatch({type: constants.PASSWORD_RESET_SENT, payload: res})
    } catch (error) {
      dispatch({
        type: constants.PASSWORD_RESET_ERROR,
        payload: error.response.data
      })
    }
  }
}

function isActivating () {
  return {
    type: constants.ACTIVATION_IN_PROGRESS
  }
}

export function activateAccount (key, history) {
  return async (dispatch) => {
    dispatch(isActivating())
    try {
      const res = await axios.get(
        `${URL}/activate?key=${key}`
      )
      console.log(res)
      dispatch({type: constants.ACTIVATION_SUCCESS})
    } catch (error) {
      dispatch({
        type: constants.ACTIVATION_ERROR,
        payload: error.response.data
      })
    }
  }
}
