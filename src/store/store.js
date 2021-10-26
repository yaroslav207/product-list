import {configureStore} from '@reduxjs/toolkit';
import {handleError as handleErrorMiddleware} from 'src/middlewares/middlewares';
import {
  authReducer,
  toastrReducer,
  productListReducer,
  configurateProductReducer,
} from './root-reducer';

const store = configureStore({
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    }).concat(handleErrorMiddleware);
  },
  reducer: {
    auth: authReducer,
    toastr: toastrReducer,
    productList: productListReducer,
    configurateProduct: configurateProductReducer,
  },
});

export default store;
