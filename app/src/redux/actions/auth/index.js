/* global localStorage */

import axios from 'axios'
import * as constants from '@actions/auth/constants'

const URL = 'http://localhost:3001'

export function logInAction ({username, password}, history) {
  return async (dispatch) => {
    try {
      const res = await axios.post(`${URL}/sessions/create`, { username, password })
      dispatch({type: constants.LOG_IN_SUCCESS})
      const user = {
        token: res.data.token,
        access_token: res.data.access_token
      }
      localStorage.setItem('user', JSON.stringify(user))
      history.push('/dashboard')
    } catch (error) {
      dispatch({
        type: constants.LOG_IN_ERROR,
        payload: error.response.data
      })
    }
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

export function logOutAction () {
  localStorage.clear()
  return {
    type: constants.UNAUTHENTICATED
  }
}

export function signUpAction ({username, password}, history) {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        `${URL}/users`,
        {username, password}
      )
      dispatch({ type: constants.SIGN_UP_SUCCESS })
      const user = {
        token: res.data.token,
        access_token: res.data.access_token
      }
      localStorage.setItem('user', JSON.stringify(user))
      history.push('/dashboard')
    } catch (error) {
      console.log(error)
      dispatch({
        type: constants.SIGN_UP_ERROR,
        payload: error.response.data
      })
    }
  }
}
