import React, { Component } from 'react'
import { MdAddShoppingCart } from 'react-icons/md'
import api from '../../services/api'

import { ProductList } from './styles'

class Home extends Component {
  state = {
    products: [],
  }

  componentDidMount = async () => {
    const { data } = await api.get('/products')

    const products = data.map(({ price, ...rest }) => ({
      price: price.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }),
      ...rest,
    }))

    this.setState({
      products,
    })
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

            <button type="button">
              <div>
                <MdAddShoppingCart size={16} color="#fff" /> 3
              </div>
              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
    )
  }
}

export default Home
