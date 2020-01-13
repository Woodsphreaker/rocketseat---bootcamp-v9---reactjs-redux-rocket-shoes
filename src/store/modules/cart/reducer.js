import { add, remove } from './actions'

const cart = (state = [], action) => {
  const actions = {
    ADD_TO_CART: add,
    REMOVE_TO_CART: remove,
    default: () => state,
  }
  return (actions[action.type] || actions.default)(state, action.product)
}

export default cart
