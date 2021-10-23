import React from 'react';
import PropTypes from 'prop-types';
import {Header} from 'src/components/common/common';

const AuthWrapper = (props) => (
  <>
    <Header />
    {props.children}
  </>
);

AuthWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthWrapper;
