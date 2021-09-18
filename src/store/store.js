import {configureStore} from '@reduxjs/toolkit';
import {commentsReducer} from './root-reducer';

const store = configureStore({
  reducer: {
    comment: commentsReducer,
  },
});

export default store;
