export default (state = {}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        number: state.number += action.incrementAmount
      }

    case 'DECREMENT':
    return {
      ...state,
      number: state.number -= action.decrementAmount
    }

    default:
      return state;
  }
}