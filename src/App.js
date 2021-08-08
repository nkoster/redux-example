import React from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './actions'

const App = () => {

  const counter = useSelector(state => state.counterReducer)
  const isLogged = useSelector(state => state.isLoggedReducer)
  const dispatch = useDispatch()

  const onClickIncrement = _ => {
    dispatch(increment(5))
  }

  const onClickDecrement = _ => {
    dispatch(decrement())
  }

  return (
    <div className='App'>
      <h1>Counter {counter}</h1>
      <button onClick={onClickIncrement}>+</button>
      <button onClick={onClickDecrement}>-</button>
      {isLogged && <h1>logged in</h1>}
    </div>
  )
}

export default App
