import React from 'react';
import styles from './styles.module.scss';

const Loader = () => (
  <div className={styles.spinnerContainer}>
    <div className={styles.spinner}></div>
  </div>
);

export default Loader;
