import React from 'react';
import PropTypes from 'prop-types';
import {ButtonTypes} from 'src/common/enums/enums';
import {getAllowedClasses} from 'src/helper/helper';
import style from './styles.module.scss';

function Button({onClick, type, className, label}) {
  const allowedClasses = getAllowedClasses([
    style.button,
    className,
  ]);
  return (
    <button
      onClick={onClick}
      className={allowedClasses}
      type={type}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(Object.values(ButtonTypes)),
  className: PropTypes.string,
};

Button.defaultProps = {
  onClick: null,
  type: ButtonTypes.BUTTON,
  className: null,
};

export default Button;
