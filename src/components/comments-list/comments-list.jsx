import React from 'react';
import PropTypes from 'prop-types';
import Comment from './components/comment/comment';
import styles from './styles.module.scss';
import {commentType} from 'src/common/prop-types/prop-types';
import {Button, Loader, Pagination} from 'src/components/common/common';

function CommentsList({
  comments,
  currentPage,
  onLoadMore,
  pageCount,
  onPageChange,
  isLastPage,
  isLoading,
}) {
  const isNoComments = !comments || Boolean(!comments.length);

  if (isNoComments) {
    return <div className={styles.noCommentsWrapper}>
      Пока что нет комментариев
    </div>;
  }

  return (
    <div className="wrapper">
      <ul className={styles.commentList}>
        {comments.map((comment) => (
          <li key={comment.id} className={styles.commentItem}>
            <Comment comment={comment} />
          </li>
        ))}
      </ul>
      {isLoading && <Loader />}
      <div className={styles.paginationWrapper}>
        {!isLastPage && <Button
          label="Показать еще"
          onClick={onLoadMore}
        />}
        <Pagination
          pageCount={pageCount}
          onPageChange={onPageChange}
          className={styles.navigation}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(commentType).isRequired,
  onLoadMore: PropTypes.func,
  pageCount: PropTypes.number,
  onPageChange: PropTypes.func,
  isLastPage: PropTypes.boolean,
  currentPage: PropTypes.number,
  isLoading: PropTypes.boolean,
};

CommentsList.defaultProps = {
  comments: [],
};

export default CommentsList;
