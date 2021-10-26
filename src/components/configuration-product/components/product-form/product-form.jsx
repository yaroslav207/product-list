import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {useHistory} from 'react-router-dom';
import {Input, Button, ImagePreviewControl} from 'src/components/common/common';
import {getResolver} from 'src/helper/helper';
import PropTypes from 'prop-types';

import {
  product as productSchema,
} from 'src/validation-schemas/validation-schemas';
import {
  ButtonTypes,
  ProductPayloadKey,
  InputTypes, AppRoute,
} from 'src/common/enums/enums';
import styles from './styles.module.scss';
import {productType} from 'src/common/prop-types/prop-types';
import {DEFAULT_CREATE_PRODUCT_PAYLOAD} from './common/constants';
import {
  MIN_PRICE_PRODUCT,
  MAX_PRICE_PRODUCT,
  MIN_DISCOUNT,
  MAX_DISCOUNT,
  MIN_LENGTH_NAME,
  MAX_LENGTH_NAME,
  MAX_LENGTH_DESCRIPTION,
} from 'src/common/constants/constats';

function ProductForm({onSubmitForm, product}) {
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({
    resolver: getResolver(productSchema),
    defaultValues: product,
  });
  const history = useHistory();

  const handleSubmitForm = async (productPayload) => {
    await onSubmitForm(productPayload);
    history.push(AppRoute.ROOT);
  };

  useEffect(() => {
    reset(product);
  }, [product]);

  return (
    <div className={styles.productForm}>
      <form className={styles.form} onSubmit={handleSubmit(handleSubmitForm)}>
        <ImagePreviewControl
          label={'Image'}
          name={ProductPayloadKey.IMAGE}
          errors={errors}
          register={register}
          imageUrl={product.imgUrl?.url}
        />
        <Input
          name={ProductPayloadKey.NAME}
          label="Name"
          errors={errors}
          register={register}
          type={InputTypes.TEXT}
          className={styles.input}
          minLength={MIN_LENGTH_NAME}
          maxLength={MAX_LENGTH_NAME}
        />
        <Input
          name={ProductPayloadKey.DESCRIPTION}
          label="Description"
          errors={errors}
          register={register}
          type={InputTypes.TEXT}
          className={styles.input}
          maxLength={MAX_LENGTH_DESCRIPTION}
        />
        <Input
          name={ProductPayloadKey.PRICE}
          label="Price"
          errors={errors}
          register={register}
          type={InputTypes.NUMBER}
          className={styles.input}
          step={0.01}
          min={MIN_PRICE_PRODUCT}
          max={MAX_PRICE_PRODUCT}
        />
        <Input
          name={ProductPayloadKey.DISCOUNT}
          label="Discount"
          errors={errors}
          register={register}
          type={InputTypes.NUMBER}
          className={styles.input}
          min={MIN_DISCOUNT}
          max={MAX_DISCOUNT}
        />
        <Input
          name={ProductPayloadKey.DISCOUNT_DATE}
          label="Discount date"
          errors={errors}
          register={register}
          type={InputTypes.DATE}
          className={styles.input}
        />
        <Button
          label="Submit"
          type={ButtonTypes.SUBMIT}
          className={styles.input}
        />
      </form>
    </div>
  );
}

ProductForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
  product: productType,
  imgUrl: PropTypes.string,
};

ProductForm.defaultProps = {
  product: DEFAULT_CREATE_PRODUCT_PAYLOAD,
};

export default ProductForm;

