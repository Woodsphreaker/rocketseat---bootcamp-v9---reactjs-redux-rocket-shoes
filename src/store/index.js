import { createStore } from 'redux'

// reducers whith combine reducers
import rootReducer from './modules/rootReducer'

const store = createStore(rootReducer)

export default store
