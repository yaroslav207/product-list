import {createReducer} from '@reduxjs/toolkit';
import {loadComments, loadMoreComments} from './actions';
import {START_PAGE_COMMENTS} from 'src/common/constants/constats';
import {DataStatus} from 'src/common/enums/enums';

const initialState = {
  dataStatus: DataStatus.IDLE,
  loadMoreDataStatus: DataStatus.IDLE,
  comments: [],
  page: START_PAGE_COMMENTS,
  lastPage: 0,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(loadComments.pending, (state) => {
    state.dataStatus = DataStatus.PENDING;
  });
  builder.addCase(loadComments.fulfilled, (state, action) => {
    const {comments, lastPage, page} = action.payload;
    state.dataStatus = DataStatus.FULFILLED;
    state.comments = comments;
    state.lastPage = lastPage;
    state.page = page;
  });
  builder.addCase(loadComments.rejected, (state) => {
    state.dataStatus = DataStatus.REJECTED;
  });

  builder.addCase(loadMoreComments.pending, (state) => {
    state.loadMoreDataStatus = DataStatus.PENDING;
  });
  builder.addCase(loadMoreComments.fulfilled, (state, action) => {
    const {comments, lastPage, page} = action.payload;
    state.loadMoreDataStatus = DataStatus.FULFILLED;
    state.comments = [...state.comments, ...comments];
    state.lastPage = lastPage;
    state.page = page;
  });
  builder.addCase(loadMoreComments.rejected, (state) => {
    state.loadMoreDataStatus = DataStatus.REJECTED;
  });
});

export {reducer};
