import { add, remove } from './operations'

const user = (state = [], action) => {
  const actions = {
    '@user/ADD': add,
    '@user/REMOVE': remove,
    default: () => state,
  }

  return (actions[action.type] || actions.default)(state, action)
}

export default user
