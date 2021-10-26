import {createAsyncThunk} from '@reduxjs/toolkit';

import {
  product as productService,
} from 'src/services/services';

const ActionType = {
  LOAD_PRODUCTS: 'product/load-products',
};

const loadProducts = createAsyncThunk(ActionType.LOAD_PRODUCTS, async () => {
  return await productService.getAll();
});

const deleteProduct = (id) => async (dispatch) => {
  await productService.delete(id);
  dispatch(loadProducts());
};

export {
  loadProducts,
  deleteProduct,
};


