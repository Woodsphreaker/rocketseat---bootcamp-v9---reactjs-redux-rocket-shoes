const addToCart = product => ({
  type: '@cart/ADD',
  product,
})

const removeFromCart = productID => ({
  type: '@cart/REMOVE',
  productID,
})

const updateAmount = (productID, amount) => ({
  type: '@cart/UPDATE_AMOUNT',
  productID,
  amount,
})

export { addToCart, updateAmount, removeFromCart }
