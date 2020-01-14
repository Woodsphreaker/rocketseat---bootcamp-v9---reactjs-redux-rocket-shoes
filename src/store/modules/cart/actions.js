const addToCart = product => ({
  type: '@cart/ADD',
  product,
})

const removeFromCart = productID => ({
  type: '@cart/REMOVE',
  productID,
})

export { addToCart, removeFromCart }
