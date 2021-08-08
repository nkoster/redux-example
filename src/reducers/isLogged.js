const isLoggedReducer = (state = false, action) => {
  switch(action.type) {
    case 'signIn':
      return !state
    default:
      return state
  }
}

export default isLoggedReducer
