import React, { Component } from 'react'
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md'
import { Container, ProductTable, Total } from './styles'

class Cart extends Component {
  state = {
    ammount: 1,
    price: 129.9,
  }

  sub = () => {
    const { ammount, price } = this.state

    this.setState({
      ammount: ammount - 1,
      price: price / ammount,
    })
  }

  add = () => {
    const { ammount, price } = this.state

    this.setState({
      ammount: ammount + 1,
      price: (ammount + 1) * price,
    })
  }

  render() {
    const { ammount, price } = this.state

    return (
      <Container>
        <ProductTable>
          <thead>
            <tr>
              <th></th>
              <th>PRODUTO</th>
              <th>QTD</th>
              <th>SUBTOTAL</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src="https://static.netshoes.com.br/produtos/tenis-nike-md-runner-2-masculino/26/D12-1407-026/D12-1407-026_detalhe1.jpg?ims=326x"
                  alt="tênis"
                />
              </td>
              <td>
                <strong>Tênis Nike</strong>
                <span>R$129,90</span>
              </td>
              <td>
                <div>
                  <button>
                    <MdRemoveCircleOutline
                      size={20}
                      color="#7159c1"
                      onClick={this.sub}
                    />
                  </button>
                  <input type="number" readOnly value={ammount} />
                  <button>
                    <MdAddCircleOutline
                      size={20}
                      color="#7159c1"
                      onClick={this.add}
                    />
                  </button>
                </div>
              </td>
              <td>
                <strong>{price}</strong>
              </td>
              <td>
                <button type="button">
                  <MdDelete size={20} color="#7150c1" />
                </button>
              </td>
            </tr>
          </tbody>
        </ProductTable>

        <footer>
          <button type="button">Finalizar Pedido</button>
          <Total>
            <span>Total</span>
            <strong>R$1900,00</strong>
          </Total>
        </footer>
      </Container>
    )
  }
}

export default Cart
