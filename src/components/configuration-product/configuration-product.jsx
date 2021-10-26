import React, {useEffect} from 'react';
import {ProductForm} from './components/components';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {configurationProduct as configurationProductAction} from 'src/store/actions';
import {mapProductToFormPayload} from './helpers/helpers';
import {DataStatus} from 'src/common/enums/enums';
import {Loader} from 'src/components/common/common';

function ConfigurationProduct() {
  const dispatch = useDispatch();

  const {product, dataStatus} = useSelector(({configurateProduct}) => ({
    product: configurateProduct.product,
    dataStatus: configurateProduct.dataStatus,
  }));

  const {id} = useParams();

  const isEdit = Boolean(id);
  const isLoading = dataStatus === DataStatus.PENDING;

  const mapProduct = product ? mapProductToFormPayload(product) : undefined;

  const handleCreateProduct = async (payload) => {
    await dispatch(configurationProductAction.addProduct(payload));
  };

  const handleEditProduct = async (payload) => {
    await dispatch(configurationProductAction.editProduct(id, payload));
  };

  const handleSubmitForm = isEdit ? handleEditProduct : handleCreateProduct;

  useEffect(() => {
    if (isEdit) {
      dispatch(configurationProductAction.loadProduct(id));
    }
    dispatch(configurationProductAction.resetState());

    return () => {
      dispatch(configurationProductAction.resetState());
    };
  }, [id]);


  if (isLoading) {
    return <Loader/>;
  }

  return (<ProductForm
    onSubmitForm={handleSubmitForm}
    product={mapProduct}
  />);
}

export default ConfigurationProduct;
