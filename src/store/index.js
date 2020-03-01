import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

// reducers whith combine reducers
import rootReducer from './modules/rootReducer'

// root saga
import rootSaga from './modules/rootSaga'

// reactotron saga monitor
const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null

const sagaMiddleware = createSagaMiddleware({
  sagaMonitor,
})

// reactotron redux
const enhancer =
  process.env.NODE_ENV === 'development'
    ? compose(console.tron.createEnhancer(), applyMiddleware(sagaMiddleware))
    : applyMiddleware(sagaMiddleware)

const store = createStore(rootReducer, enhancer)

sagaMiddleware.run(rootSaga)

export default store
