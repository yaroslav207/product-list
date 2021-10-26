import React from 'react';
import {productType} from 'src/common/prop-types/prop-types';
import PropTypes from 'prop-types';
import {Button} from 'src/components/common/common';
import styles from './styles.module.scss';
import {NavLink} from 'react-router-dom';
import {AppRoute} from 'src/common/enums/enums';
import {getDiscountDaysLeft, getPriceWithDiscount} from './helpers/helpers';

function ProductCard({product, onDeleteProduct}) {
  const priceWithDiscount = getPriceWithDiscount(product.price, product.discount);
  const discountDaysLeft = getDiscountDaysLeft(product.discountDate);
  const hasDiscount = priceWithDiscount && discountDaysLeft && (discountDaysLeft > 0);
  const price = hasDiscount ? priceWithDiscount : product.price;

  const handleDelete = () => {
    onDeleteProduct(product.id);
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.imageWrapper}>
        <img src={product.imgUrl.url} className={styles.image}/>
      </div>

      <div className={styles.infoWrapper}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.description}>{product.description}</p>
        <span className={styles.price}>{price}$</span>
        <div className={styles.discountWrapper}>
          {hasDiscount && <>
            <div className={styles.discountValue}>
              <span className={styles.marker}>DISCOUNT</span>
              <span className={styles.discount}>- {product.discount}%</span>
            </div>
            <span className={styles.discountDaysLeft}>{discountDaysLeft} days left</span>
          </>}
        </div>
      </div>

      <div className={styles.configurateWrapper}>
        <NavLink
          to={`${AppRoute.PRODUCT_CREATE}/${product.id}`}
          className={styles.buttonEdit}
        >Edit</NavLink>
        <Button
          label={'Delete'}
          className={styles.buttonDelete}
          onClick={handleDelete}
        />
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: productType.isRequired,
  onDeleteProduct: PropTypes.func.isRequired,
};

export default ProductCard;
