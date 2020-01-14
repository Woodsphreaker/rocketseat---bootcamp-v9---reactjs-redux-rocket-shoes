import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Pages
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Users from './Pages/Users'

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/cart" component={Cart}></Route>
      <Route path="/users" component={Users}></Route>
    </Switch>
  )
}

export default Routes
