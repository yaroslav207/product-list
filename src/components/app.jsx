import React, {useEffect, useState} from 'react';
import CommentsForm from 'src/components/comments-form/comments-form';
import CommentsList from 'src/components/comments-list/comments-list';
import {commentActionCreator} from 'src/store/actions';
import {useDispatch, useSelector} from 'react-redux';
import {DEFAULT_COMMENTS_FILTER} from 'src/common/constants/constats';
import {DataStatus} from 'src/common/enums/enums';
import {Loader} from './common/common';

function App() {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState(DEFAULT_COMMENTS_FILTER);
  const {comments, pageCount, page, dataStatus, loadMoreDataStatus} = useSelector(({comment}) => ({
    comments: comment.comments,
    pageCount: comment.lastPage,
    page: comment.page,
    dataStatus: comment.dataStatus,
    loadMoreDataStatus: comment.loadMoreDataStatus,
  }));

  const isLastPage = pageCount === page;
  const isLoading = dataStatus === DataStatus.PENDING;
  const isLoadMoreLoading = loadMoreDataStatus === DataStatus.PENDING;

  useEffect(() => {
    dispatch(commentActionCreator.loadComments(filter));
  }, [filter]);

  const handleLoadMoreComments = () => {
    dispatch(commentActionCreator.loadMoreComments(filter));
  };

  const handleChangePage = (selected) => {
    setFilter({...filter, page: selected});
  };

  return (
    <div className="fill">
      <CommentsForm />
      {isLoading
        ? <Loader/>
        : <CommentsList
          comments={comments}
          onLoadMore={handleLoadMoreComments}
          pageCount={pageCount}
          onPageChange={handleChangePage}
          isLastPage={isLastPage}
          currentPage={filter.page}
          isLoading={isLoadMoreLoading}
        />
      }
    </div>
  );
}

export default App;
