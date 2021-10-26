import {InputTypes, FileExtension} from 'src/common/enums/enums';
import {getFileExtensions, getAllowedClasses} from 'src/helper/helper';
import styles from './styles.module.scss';
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {checkDimensionsImages} from './helpers/helpers';
import {notification} from 'src/services/services';

const acceptExtension = getFileExtensions(
    FileExtension.JPEG,
    FileExtension.JPG,
    FileExtension.PNG,
    FileExtension.SVG,
);

const ImagePreviewControl = ({
  name,
  register,
  errors,
  imageUrl,
  label,
  className,
  width,
  height,
  maxDimensions,
  minDimensions,
}) => {
  const [currentImgUrl, setImgUrl] = useState(imageUrl);

  const handleChange = async (evt) => {
    const hasImg = Boolean(evt.target.files.length);
    const [file] = evt.target.files ?? [];

    if (!file) {
      return;
    }

    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      const imgDimensions = {
        width: img.width,
        height: img.height,
      };
      if (!(checkDimensionsImages(imgDimensions, minDimensions, maxDimensions))) {
        notification.error('Error', 'Image dimensions is not allowed');
        evt.target.value = '';
        return;
      }

      setImgUrl(hasImg ? URL.createObjectURL(file) : imageUrl);
    };
  };
  const allowedClassesInputWrapper = getAllowedClasses(className, styles.inputWrapper);

  useEffect(() => {
    setImgUrl(imageUrl);
  }, [imageUrl]);

  return (
    <>
      <label className={allowedClassesInputWrapper}>
        <img
          src={currentImgUrl}
          width={width}
          height={height}
          loading="lazy"
          label={label}
          className={styles.defaultImage}
        />
        <input
          {...register(name)}
          accept={acceptExtension}
          type={InputTypes.FILE}
          onChange={handleChange}
          className={styles.input}
        />
      </label>
      {errors[name] && <span className={styles.errorMessage}>
        {errors[name].message}
      </span>}
    </>
  );
};

ImagePreviewControl.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  errors: PropTypes.objectOf(PropTypes.object),
  register: PropTypes.func,
  className: PropTypes.string,
  imageUrl: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  maxDimensions: PropTypes.number,
  minDimensions: PropTypes.number,
};

ImagePreviewControl.defaultProps = {
  type: InputTypes.TEXT,
  errors: {},
  register: {},
  className: null,
  minDimensions: 200,
  maxDimensions: 4000,
};

export default ImagePreviewControl;
