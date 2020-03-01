const addToCartRequest = productID => ({
  type: '@cart/ADD_REQUEST',
  productID,
})

const addToCartSuccess = product => ({
  type: '@cart/ADD_SUCCESS',
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

export { addToCartRequest, addToCartSuccess, updateAmount, removeFromCart }
