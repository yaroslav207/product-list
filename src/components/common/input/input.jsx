import React from 'react';
import PropTypes from 'prop-types';
import {InputTypes} from 'src/common/enums/enums';
import styles from './styles.module.scss';
import {getAllowedClasses} from 'src/helper/helper';

function Input({
  label,
  name,
  type,
  errors,
  register,
  className,
  ...rest
}) {
  const isTextArea = type === InputTypes.TEXTAREA;

  const labelWrapperAllowedClasses = getAllowedClasses([
    className,
    styles.labelWrapper,
  ]);
  return (
    <label className={labelWrapperAllowedClasses}>
      <span className={styles.label}>{label}</span>
      {isTextArea
        ? <textarea
          {...register(name)}
          className={getAllowedClasses([
            styles.input,
            styles.textarea,
          ])}
          name={name}
        />
        : <input
          {...register(name)}
          className={styles.input}
          name={name}
          type={type}
          {...rest}
        />
      }
      {errors[name] && <span className={styles.errorMessage}>
        {errors[name].message}
      </span>}
    </label>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.values(InputTypes)),
  errors: PropTypes.objectOf(PropTypes.object),
  register: PropTypes.func,
  className: PropTypes.string,
};

Input.defaultProps = {
  type: InputTypes.TEXT,
  errors: {},
  register: {},
  className: null,
};

export default Input;
