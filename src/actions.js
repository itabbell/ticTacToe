export function increment(incrementAmount) {
  return {
    type: 'INCREMENT',
    incrementAmount
  };
}

export function decrement(decrementAmount) {
  return {
    type: 'DECREMENT',
    decrementAmount
  };
}