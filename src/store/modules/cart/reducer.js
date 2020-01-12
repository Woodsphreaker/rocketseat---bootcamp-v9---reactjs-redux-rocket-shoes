const cart = (state = [], action) => {
  const actions = {
    ADD_TO_CART: () => [...state, action.product],
    default: () => state,
  }
  console.log('cart', state, action)
  return (actions[action.type] || actions.default)()
}

export default cart
