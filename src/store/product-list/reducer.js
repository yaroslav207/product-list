import {createReducer} from '@reduxjs/toolkit';
import {loadProducts} from './actions';
import {DataStatus} from 'src/common/enums/enums';

const initialState = {
  dataStatus: DataStatus.IDLE,
  products: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(loadProducts.pending, (state) => {
    state.dataStatus = DataStatus.PENDING;
  });
  builder.addCase(loadProducts.fulfilled, (state, action) => {
    state.dataStatus = DataStatus.FULFILLED;
    state.products = action.payload;
  });
  builder.addCase(loadProducts.rejected, (state) => {
    state.dataStatus = DataStatus.REJECTED;
  });
});

export {reducer};
