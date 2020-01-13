const add = (state, product) => {
  const hasProductAdd = state.find(({ id }) => product.id === id)

  if (hasProductAdd) {
    return state.map(el => ({
      ...el,
      amount: el.id === hasProductAdd.id ? el.amount + 1 : el.amount,
    }))
  }

  return [...state, { ...product, amount: 1 }]
}

const remove = (state, product) => {
  return state.filter(el => el.id !== product.id)
}

export { add, remove }
