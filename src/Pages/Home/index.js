import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { MdAddShoppingCart } from 'react-icons/md'
import api from '../../services/api'
import formatPrice from '../../util/formatPrice'

import { ProductList } from './styles'

// PropTypes
import propTypes from 'prop-types'

// Reducer Actions
import * as CartActions from '../../store/modules/cart/actions'

class Home extends Component {
  state = {
    products: [],
  }

  static propTypes = {
    dispatch: propTypes.func.isRequired,
  }

  componentDidMount = async () => {
    const { data } = await api.get('/products')

    const products = data.map(({ price, ...product }) => ({
      formatedPrice: formatPrice(price),
      price,
      ...product,
    }))

    this.setState({
      products,
    })
  }

  handleAddProduct = product => {
    const { addToCart } = this.props // Passed props whith mapDispatchToProps and bindActionCreators
    // dispatch({
    //   type: 'ADD_TO_CART',
    //   product
    // })
    addToCart(product)
  }

  render() {
    const { products } = this.state
    const { cart } = this.props
    console.tron.log(cart)

    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.formatedPrice}</span>

            <button
              type="button"
              onClick={() => this.handleAddProduct(product)}
            >
              <div>
                <MdAddShoppingCart size={16} color="#fff" />
                {0}
              </div>
              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch)

const mapStateToProps = state => {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
