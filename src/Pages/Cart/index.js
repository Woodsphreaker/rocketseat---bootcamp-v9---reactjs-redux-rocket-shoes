import React, { Component } from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md'
import { Container, ProductTable, Total } from './styles'

class Cart extends Component {
  state = {
    cart: [],
  }

  static propTypes = {
    cart: propTypes.shape().isRequired,
  }

  componentDidMount = () => {
    const { cart } = this.props
    this.setState({
      cart,
    })
  }

  render() {
    const { cart } = this.state

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
            {cart.map(product => (
              <tr key={product.id}>
                <td>
                  <img src={product.image} alt={product.title} />
                </td>
                <td>
                  <strong>{product.title}</strong>
                  <span>{product.price}</span>
                </td>
                <td>
                  <div>
                    <button>
                      <MdRemoveCircleOutline
                        size={20}
                        color="#7159c1"
                        onClick={() => ''}
                      />
                    </button>
                    <input type="number" readOnly value={product.amount} />
                    <button>
                      <MdAddCircleOutline
                        size={20}
                        color="#7159c1"
                        onClick={() => ''}
                      />
                    </button>
                  </div>
                </td>
                <td>
                  <strong>{0}</strong>
                </td>
                <td>
                  <button type="button">
                    <MdDelete size={20} color="#7150c1" />
                  </button>
                </td>
              </tr>
            ))}
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

export default connect(({ cart }) => ({ cart }))(Cart)
