import React from 'react'
import { Link } from 'react-router-dom'

// import propTypes from 'prop-types'

import { MdShoppingBasket } from 'react-icons/md'

// redux
import { connect } from 'react-redux'

import { Container, Cart } from './styles'
import logo from '../../assets/images/logo.svg'

const Header = ({ cart, cartSize }) => {
  return (
    <>
      <Container>
        <Link to="/">
          <img src={logo} alt="RocketShoes" title="RocketShoes" />
        </Link>

        <Cart to="/cart">
          <div>
            <strong>Meu Carrinho</strong>
            <span>{cartSize} itens</span>
          </div>
          <MdShoppingBasket size={36} color="#fff" />
        </Cart>
      </Container>
    </>
  )
}

export default connect(({ cart }) => ({ cart, cartSize: cart.length }))(Header)
