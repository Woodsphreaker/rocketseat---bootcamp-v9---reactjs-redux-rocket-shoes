import { combineReducers } from 'redux'

// reducers
import cart from './cart/reducer'
import user from './user/reducer'

export default combineReducers({
  cart,
  user,
})
