import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {authAction} from 'src/store/actions';
import styles from './styles.module.scss';
import {Button} from 'src/components/common/common';

const Header = () => {
  const {user} = useSelector(({auth}) => ({
    user: auth.user,
  }));

  const hasUser = Boolean(user);
  const dispatch = useDispatch();

  const handleUserExit = () => {
    dispatch(authAction.logout());
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <h1>Product list</h1>
        {hasUser && <nav>
          <Button label="LogOut" onClick={handleUserExit} />
        </nav>}
      </div>
    </header>
  );
};

export default Header;
