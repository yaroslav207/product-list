import React from 'react';
import {AuthWrapper, PrivateRoute} from 'src/components/common/common';
import PropTypes from 'prop-types';

const AuthPrivateRouter = ({component, ...otherProps}) => {
  const Component = component;

  const handleRender = () => (
    <AuthWrapper>
      <Component />
    </AuthWrapper>
  );

  return <PrivateRoute {...otherProps} render={handleRender} />;
};

AuthPrivateRouter.propTypes = {
  component: PropTypes.elementType.isRequired,
};

export default AuthPrivateRouter;
