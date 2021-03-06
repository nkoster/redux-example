import React from 'react'
import { render } from 'react-dom'
import './index.css'
import { createStore } from 'redux'
import allReducers from './reducers'
import { Provider } from 'react-redux'

import App from './App'

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
