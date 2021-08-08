import React from 'react'
import { render } from 'react-dom'
import './index.css'
import { createStore } from 'redux'

import App from './App'

// STORE - Globelized State

// ACTION

const increment = _ => {
  return {
    type: 'increment'
  }
}

const decrement = _ => {
  return {
    type: 'decrement'
  }
}

// REDUCER

const counter = (state = 0, action) => {
  switch(action.type) {
    case 'increment': return state + 1
    case 'decrement': return state - 1
  }
}

let store = createStore(counter)

store.subscribe(_ => console.log(store.getState()))

// DISPATCH

store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(decrement())

render(<App />, document.getElementById('root'))
