import {createAsyncThunk} from '@reduxjs/toolkit';

import {
  comment as commentService,
} from 'src/services/services';

const ActionType = {
  LOAD_COMMENT: 'comment/load-comment',
  LOAD_MORE_COMMENTS: 'comment/load-more-comment',
  CREATE_COMMENT: 'comment/create-comment',
};

const loadComments = createAsyncThunk(ActionType.LOAD_COMMENT, async (filter) => {
  const {data, lastPage, currentPage} = await commentService.getCommentsByQuery(filter);

  return {
    comments: data,
    lastPage,
    page: currentPage,
  };
});

const loadMoreComments = createAsyncThunk(ActionType.LOAD_MORE_COMMENTS, async (_, {getState}) => {
  const {comment} = getState();
  const filter = {page: comment.page + 1};
  const {data, lastPage, currentPage} = await commentService.getCommentsByQuery(filter);

  return {
    comments: data,
    lastPage,
    page: currentPage,
  };
});

const createComment = (commentPayload) => async () => {
  await commentService.addComment(commentPayload);
};

export {
  createComment,
  loadComments,
  loadMoreComments,
};


