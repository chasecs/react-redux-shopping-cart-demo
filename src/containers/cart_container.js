import React, { Component} from 'react'
import PropTypes from 'prop-types'
import Cart from '../components/cart'
import { connect } from 'react-redux'
import { checkout } from '../actions/cart_action';

class CartContainer extends Component {

  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired
    })).isRequired,
    total: PropTypes.string,
    checkout: PropTypes.func.isRequired
  }

  render(){

    const { products, total, checkout} = this.props;

    return(
      <Cart
        products={products}
        total={total}
        onCheckoutClicked={() => {
          alert('checkout');
          return checkout;
        }}
      />
    )

  }
}

const productsInCart = (state) => {
  const { products, cart } = state;
  let result = [];
  let total = 0;
  for(let id in cart.quantityById){
    result.push({
      ...products[id],
      quantity:cart.quantityById[id]
    });
    total += products[id].price * cart.quantityById[id]
  }

  return {
    products: result,
    total: total.toFixed(2)
  }
}

const mapStateToProps = (state) => productsInCart(state)

export default connect(
  mapStateToProps,
  {checkout}
)(CartContainer)
