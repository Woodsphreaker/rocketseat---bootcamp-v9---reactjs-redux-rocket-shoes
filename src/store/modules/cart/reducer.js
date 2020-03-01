import { addSuccess, remove, updateAmount } from './operations'

const cart = (state = [], action) => {
  const actions = {
    '@cart/ADD_SUCCESS': addSuccess,
    '@cart/REMOVE': remove,
    '@cart/UPDATE_AMOUNT': updateAmount,
    default: () => state,
  }
  return (actions[action.type] || actions.default)(state, action)
}

export default cart
