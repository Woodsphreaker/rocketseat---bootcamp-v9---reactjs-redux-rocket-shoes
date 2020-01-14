import { add, remove } from './operations'

const cart = (state = [], action) => {
  const actions = {
    '@cart/ADD': add,
    '@cart/REMOVE': remove,
    default: () => state,
  }
  return (actions[action.type] || actions.default)(state, action)
}

export default cart
