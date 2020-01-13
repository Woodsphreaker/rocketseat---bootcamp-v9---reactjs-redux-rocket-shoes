import { createStore } from 'redux'

// reducers whith combine reducers
import rootReducer from './modules/rootReducer'

// reactotron redux
const enhancer =
  process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null

const store = createStore(rootReducer, enhancer)

export default store
