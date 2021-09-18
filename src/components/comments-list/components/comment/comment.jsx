import React from 'react';
import {commentType} from 'src/common/prop-types/prop-types';
import styles from './styles.module.scss';
import {getFormatDate} from 'src/helper/helper';

function Comment({comment}) {
  const createdAtComment = getFormatDate(comment.createdAt);
  return (
    <div className={styles.commentWrapper}>
      <div className={styles.commentInfo}>
        <span className={styles.commentAuthor}>{comment.name}</span>
        <span className={styles.commentDate}>{createdAtComment}</span>
      </div>
      <div className={styles.commentText}>
        <span>
          {comment.text}
        </span>
      </div>
    </div>
  );
}

Comment.propTypes = {
  comment: commentType.isRequired,
};

export default Comment;
