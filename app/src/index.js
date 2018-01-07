import 'react-hot-loader/patch'
import { AppContainer } from 'react-hot-loader'
import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import store from './redux/store'
import { Provider } from 'react-redux'

renderWithHotModuleReplacement(App)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NewApp = require('./components/App').default
    renderWithHotModuleReplacement(NewApp)
  })
}

function renderWithHotModuleReplacement (App) {
  render(
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  )
}
