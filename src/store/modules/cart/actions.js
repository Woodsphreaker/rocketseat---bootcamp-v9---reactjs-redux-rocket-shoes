const addToCart = product => ({
  type: 'ADD_TO_CART',
  product,
})

const removeFromCart = productID => ({
  type: 'REMOVE_TO_CART',
  productID,
})

export { addToCart, removeFromCart }
