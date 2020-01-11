import React, { Component } from 'react'
import { MdAddShoppingCart } from 'react-icons/md'

import { ProductList } from './styles'

class Home extends Component {
  state = {}

  componentDidMount = () => {}

  render() {
    return (
      <ProductList>
        {Array.from({ length: 5 }, () => (
          <li>
            <img
              src="https://static.netshoes.com.br/produtos/tenis-nike-md-runner-2-masculino/26/D12-1407-026/D12-1407-026_detalhe1.jpg?ims=326x"
              alt="tenis"
            />
            <strong>Ténis Nike</strong>
            <span>R$ 129,90</span>

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
