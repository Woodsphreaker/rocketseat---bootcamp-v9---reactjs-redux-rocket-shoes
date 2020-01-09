import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Pages
import Main from './Pages/Main'
import Cart from './Pages/Cart'

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main}></Route>
      <Route path="/cart" component={Cart}></Route>
    </Switch>
  )
}

export default Routes
