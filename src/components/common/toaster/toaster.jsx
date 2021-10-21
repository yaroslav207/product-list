import React from 'react';
import ReduxToastr from 'react-redux-toastr';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import './styles.module.scss';
import PropTypes from 'prop-types';


const Toaster = ({
  timeOut,
  isNewestOnTop,
  isDuplicatesPrevented,
  hasProgressBar,
  isClosingOnClick,
  position,
  transitionIn,
  transitionOut,
  className,
}) => {
  console.log('wsdqwedweqd');
  return (
    <ReduxToastr
      timeOut={timeOut}
      newestOnTop={isNewestOnTop}
      preventDuplicates={isDuplicatesPrevented}
      progressBar={hasProgressBar}
      closeOnToastrClick={isClosingOnClick}
      position={position}
      transitionIn={transitionIn}
      transitionOut={transitionOut}
      className={className}
    />
  );
};

Toaster.propTypes = {
  timeOut: PropTypes.number,
  isNewestOnTop: PropTypes.bool,
  isDuplicatesPrevented: PropTypes.bool,
  hasProgressBar: PropTypes.bool,
  isClosingOnClick: PropTypes.bool,
  position: PropTypes.string,
  transitionIn: PropTypes.string,
  transitionOut: PropTypes.string,
  className: PropTypes.string,
};

Toaster.defaultProps = {
  timeOut: 4000,
  isNewestOnTop: true,
  isDuplicatesPrevented: true,
  hasProgressBar: true,
  isClosingOnClick: true,
  position: 'top-right',
  transitionIn: 'fadeIn',
  transitionOut: 'fadeOut',
  className: null,
};

export default Toaster;
