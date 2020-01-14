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
      price: formatPrice(price),
      ...product,
    }))

    this.setState({
      products,
    })
  }

  handleAddProduct = product => {
    const { addToCart } = this.props
    // dispatch(addToCart(product))
    addToCart(product)
  }

  render() {
    const { products } = this.state

    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.price}</span>

            <button
              type="button"
              onClick={() => this.handleAddProduct(product)}
            >
              <div>
                <MdAddShoppingCart size={16} color="#fff" />
                {product.amount || 0}
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

export default connect(null, mapDispatchToProps)(Home)
