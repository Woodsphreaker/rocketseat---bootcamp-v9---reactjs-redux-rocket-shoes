import { add, remove } from './operations'

const user = (state = [], action) => {
  const actions = {
    ADD_USER: add,
    REMOVE_USER: remove,
    default: () => state,
  }

  return (actions[action.type] || actions.default)(state, action)
}

export default user
