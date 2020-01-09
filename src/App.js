import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'

import GlobalStyle from './styles/global'

import Header from './components/Header'

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <Routes />
      </Router>
    </>
  )
}

export default App
