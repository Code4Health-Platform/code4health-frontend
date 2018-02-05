/* global localStorage */

import 'react-hot-loader/patch'
import {AppContainer} from 'react-hot-loader'
import React from 'react'
import {render} from 'react-dom'
import Router from '@src/router'
import configureStore from './redux/store'
import {Provider} from 'react-redux'
import {AUTHENTICATED} from '@constants/auth'
import I18nProvider from './i18n/provider'

const rootElement = document.getElementById('app')

const store = configureStore()

const user = localStorage.getItem('user')
if (user) {
  store.dispatch({type: AUTHENTICATED})
}

renderWithHotModuleReplacement(I18nProvider)

if (module.hot) {
  module.hot.accept('./i18n/provider', () => {
    const I18nProvider = require('./i18n/provider').default
    renderWithHotModuleReplacement(I18nProvider)
  })
}

function renderWithHotModuleReplacement (I18nProvider) {
  render(
    <AppContainer>
      <Provider store={store}>
        <I18nProvider>
          <Router />
        </I18nProvider>
      </Provider>
    </AppContainer>,
    rootElement
  )
}
