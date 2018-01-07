import { createStore } from 'redux'

const reducer = (state = 'empty') => state

export default createStore(
  reducer,
  // for use with the chrome devtools extension
  // https://github.com/zalmoxisus/redux-devtools-extension#11-basic-store
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
