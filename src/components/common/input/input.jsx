import React from 'react';
import PropTypes from 'prop-types';
import {InputTypes} from 'src/common/enums/enums';
import styles from './styles.module.scss';

function Input() {
  return (
    <input className={styles.input}>

    </input>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.values(InputTypes)),
  className: PropTypes.string,
};

export default Input;
