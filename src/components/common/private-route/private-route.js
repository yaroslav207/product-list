import * as React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AppRoute} from 'src/common/enums/enums';

const PrivateRoute = (props) => {
  const {user} = useSelector(({auth}) => ({
    user: auth.user,
  }));

  const hasUser = Boolean(user);

  if (!hasUser) {
    return <Redirect to={AppRoute.AUTH} />;
  }

  return <Route {...props} />;
};

export default PrivateRoute;
