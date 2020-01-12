import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'

// Redux
import { Provider } from 'react-redux'

// Redux Store
import store from './store'

import GlobalStyle from './styles/global'

import Header from './components/Header'

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <GlobalStyle />
          <Header />
          <Routes />
        </Router>
      </Provider>
    </>
  )
}

export default App
