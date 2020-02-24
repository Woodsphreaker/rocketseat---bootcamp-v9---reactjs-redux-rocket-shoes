const add = (state, { product }) => {
  const hasProductAdd = state.findIndex(({ id }) => product.id === id)

  if (hasProductAdd !== -1) {
    return state.map(el => ({
      ...el,
      amount: el.id === product.id ? el.amount + 1 : el.amount,
    }))
  }

  return [...state, { ...product, amount: 1 }]
}

const remove = (state, { productID }) => {
  return state.filter(el => el.id !== productID)
}

const updateAmount = (state, { productID, amount }) => {
  if (amount <= 0) {
    return state
  }

  return state.map(el => (el.id === productID ? { ...el, amount } : el))
}

export { add, remove, updateAmount }
