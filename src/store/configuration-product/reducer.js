import {createReducer} from '@reduxjs/toolkit';
import {loadProduct, resetState} from './actions';
import {DataStatus} from 'src/common/enums/enums';

const initialState = {
  dataStatus: DataStatus.IDLE,
  product: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(loadProduct.pending, (state) => {
    state.dataStatus = DataStatus.PENDING;
  });
  builder.addCase(loadProduct.fulfilled, (state, action) => {
    state.dataStatus = DataStatus.FULFILLED;
    state.product = action.payload;
  });
  builder.addCase(loadProduct.rejected, (state) => {
    state.dataStatus = DataStatus.REJECTED;
  });

  builder.addCase(resetState, (state) => {
    state.product = null;
  });
});

export {reducer};
