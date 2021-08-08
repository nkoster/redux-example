export const increment = (incrementBy) => {
  return {
    type: 'increment',
    payload: incrementBy
  }
}

export const decrement = _ => {
  return {
    type: 'decrement'
  }
}
