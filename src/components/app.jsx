import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {authAction} from 'src/store/actions';
import {auth} from 'src/services/services';
import {AppRoute} from 'src/common/enums/enums';
import {useDispatch} from 'react-redux';

import Auth from './auth/auth';
import ProductList from './product-list/product-list';
import ConfigurationProduct from './configuration-product/configuration-product';
import {Toaster, AuthPrivateRoute} from './common/common';

function App() {
  const dispatch = useDispatch();

  const authUser = (user) => {
    dispatch(authAction.setUser(user));
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthState(authUser);

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path={AppRoute.AUTH} component={Auth} />
          <AuthPrivateRoute exact path={AppRoute.ROOT} component={ProductList}/>
          <AuthPrivateRoute path={AppRoute.PRODUCT_CREATE_$ID} component={ConfigurationProduct}/>
        </Switch>
      </Router>

      <Toaster/>
    </>
  );
}

export default App;
