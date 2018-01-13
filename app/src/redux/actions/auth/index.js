/* global localStorage */

import axios from 'axios'

import * as constants from '@actions/auth/constants'

const URL = 'http://127.0.0.1:1337'

export function logInAction ({email, password}, history) {
  return async (dispatch) => {
    try {
      const res = await axios.post(`${URL}/auth`, { email, password })
      dispatch({ type: constants.AUTHENTICATED })
      localStorage.setItem('user', res.data.token)
      history.push('/dashboard')
    } catch (error) {
      dispatch({
        type: constants.AUTHENTICATION_ERROR,
        payload: 'Invalid email or password'
      })
    }
  }
}

export function logOutAction () {
  localStorage.clear()
  return {
    type: constants.UNAUTHENTICATED
  }
}
