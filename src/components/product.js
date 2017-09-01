import React from 'react';
import PropTypes from 'prop-types';

const Product = ({price, num, title}) => (
  <div>
    {title} - &#36;{price}{num ? ` x ${num}` : null}
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}

export default Product
