import PropTypes from 'prop-types';

const productType = PropTypes.exact({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discount: PropTypes.any,
  discountDate: PropTypes.any,
  imgUrl: PropTypes.object.isRequired,
});

export {productType};
