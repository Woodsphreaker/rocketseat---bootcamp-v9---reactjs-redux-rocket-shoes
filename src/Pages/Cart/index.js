import React from 'react'
// import propTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md'
import { Container, ProductTable, Total } from './styles'

// Reducer Actions
import * as CartActions from '../../store/modules/cart/actions'

const Cart = ({ cart, removeFromCart }) => {
  const handleRemoveProduct = productID => {
    removeFromCart(productID)
  }

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
                <button
                  type="button"
                  onClick={() => handleRemoveProduct(product.id)}
                >
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

const mapStateToProps = state => ({
  cart: state.cart,
})

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
