import { call, put, all, takeLatest } from 'redux-saga/effects'

import api from '../../../services/api'
import { addToCartSuccess } from './actions'

function* addToCart({ productID }) {
  const { data } = yield call(api.get, `products/${productID}`)
  yield put(addToCartSuccess(data))
}

function* mySaga() {
  yield all([takeLatest('@cart/ADD_REQUEST', addToCart)])
}

// export default all([takeLatest('@cart/ADD_REQUEST', addToCart)])
export default mySaga
