import React from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
import {getAllowedClasses} from 'src/helper/helper';
import {MARGIN_PAGES_DISPLAYED, PAGE_RANGE_DISPLAYED} from './common/constants/constants';
import styles from './styles.module.scss';

/**
 * @return {null}
 */
function Pagination({
  pageCount,
  currentPage,
  onPageChange,
  className,
}) {
  const handlePageChange = ({selected}) => {
    onPageChange(selected + 1);
  };

  const paginationAllowedClasses = getAllowedClasses([
    styles.pagination,
    className,
  ]);

  const currentSelect = currentPage - 1;

  return pageCount
        ? (<ReactPaginate
          pageCount={pageCount}
          forcePage={currentSelect}
          marginPagesDisplayed={MARGIN_PAGES_DISPLAYED}
          pageRangeDisplayed={PAGE_RANGE_DISPLAYED}
          onPageChange={handlePageChange}
          previousLabel={''}
          nextLabel={''}
          breakLabel={'...'}
          containerClassName={paginationAllowedClasses}
          previousClassName={styles.previous}
          nextClassName={styles.next}
          pageClassName={styles.page}
          pageLinkClassName={styles.link}
          activeLinkClassName={styles.linkActive}
          breakClassName={styles.break}
        />)
      : null;
}

Pagination.propTypes = {
  pageCount: PropTypes.number,
  currentPage: PropTypes.number,
  onPageChange: PropTypes.func,
  className: PropTypes.string,
};

Pagination.defaultProps = {
  pageCount: 0,
};

export default Pagination;
