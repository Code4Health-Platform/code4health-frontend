/* global localStorage */

import axios from 'axios'

export const AUTHENTICATED = 'authenticated_user'
export const UNAUTHENTICATED = 'unauthenticated_user'
export const AUTHENTICATION_ERROR = 'authentication_error'

const URL = 'http://127.0.0.1:1337'

export function logInAction ({email, password}, history) {
  return async (dispatch) => {
    try {
      const res = await axios.post(`${URL}/auth`, { email, password })
      dispatch({ type: AUTHENTICATED })
      localStorage.setItem('user', res.data.token)
      history.push('/dashboard')
    } catch (error) {
      dispatch({
        type: AUTHENTICATION_ERROR,
        payload: 'Invalid email or password'
      })
    }
  }
}

export function logOutAction () {
  localStorage.clear()
  return {
    type: UNAUTHENTICATED
  }
}
