import 'react-hot-loader/patch'
import { AppContainer } from 'react-hot-loader'
import React from 'react'
import { render } from 'react-dom'
import Router from './components/Router'
import store from './redux/store'
import { Provider } from 'react-redux'

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
    document.getElementById('app')
  )
}
