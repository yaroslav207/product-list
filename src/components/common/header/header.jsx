import React from 'react';
import {useDispatch} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {authAction} from 'src/store/actions';
import styles from './styles.module.scss';
import {AppRoute} from 'src/common/enums/enums';
import {Button} from 'src/components/common/common';

const Header = () => {
  const dispatch = useDispatch();

  const handleUserExit = () => {
    dispatch(authAction.logout());
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <h1>Product list</h1>
        <div className={styles.rightWrapper}>
          <nav>
            <ul className={styles.navigation}>
              <li className={styles.navigationItem}>
                <NavLink to={AppRoute.ROOT} className={styles.link}>
                  Home
                </NavLink>
              </li>
              <li className={styles.navigationItem}>
                <NavLink to={AppRoute.PRODUCT_CREATE} className={styles.link}>
                  Create product
                </NavLink>
              </li>
            </ul>
          </nav>
          <Button label="LogOut" onClick={handleUserExit} />
        </div>

      </div>
    </header>
  );
};

export default Header;
