const add = (state, { data }) => {
  return [...state, data]
}

const remove = (state, { id }) => {
  return state.filter(el => el.id !== id)
}

export { add, remove }
