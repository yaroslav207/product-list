import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {productAction} from 'src/store/actions';
import {DataStatus} from 'src/common/enums/enums';
import {ProductCard} from './components/components';
import {Loader} from 'src/components/common/common';

import styles from './styles.module.scss';


function ProductList() {
  const dispatch = useDispatch();

  const {products, dataStatus} = useSelector(({productList}) => ({
    dataStatus: productList.dataStatus,
    products: productList.products,
  }));

  const isLoading = dataStatus === DataStatus.PENDING;

  useEffect(() => {
    dispatch(productAction.loadProducts());
  }, []);

  const handleDeleteProduct = (id) => {
    dispatch(productAction.deleteProduct(id));
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.productListWrapper}>
      {products.map((product) => <ProductCard
        key={product.id}
        product={product}
        onDeleteProduct={handleDeleteProduct}
      />)}
    </div>
  );
}

export default ProductList;
