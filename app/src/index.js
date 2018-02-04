/* global localStorage */

import 'react-hot-loader/patch'
import {AppContainer} from 'react-hot-loader'
import React from 'react'
import {render} from 'react-dom'
import Router from './components/Router'

import configureStore from './redux/store'
import {Provider} from 'react-redux'
import {AUTHENTICATED} from '@constants/auth'

const rootElement = document.getElementById('app')
const initialState = {locale: 'en_gb'}
const store = configureStore(initialState)

const user = localStorage.getItem('user')
if (user) {
  store.dispatch({type: AUTHENTICATED})
}

renderWithHotModuleReplacement(Router)

if (module.hot) {
  module.hot.accept('./components/Router', () => {
    const Router = require('./components/Router').default
    renderWithHotModuleReplacement(Router)
  })
}

function renderWithHotModuleReplacement (Router) {
  render(
    <AppContainer>
      <Provider store={store}>
        <Router />
      </Provider>
    </AppContainer>,
    rootElement
  )
}
