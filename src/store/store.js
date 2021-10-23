import {configureStore} from '@reduxjs/toolkit';
import {authReducer, toastrReducer} from './root-reducer';

import {handleError as handleErrorMiddleware} from 'src/middlewares/middlewares';

const store = configureStore({
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    }).concat(handleErrorMiddleware);
  },
  reducer: {
    auth: authReducer,
    toastr: toastrReducer,
  },
});

export default store;
