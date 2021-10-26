import {createAsyncThunk, createAction} from '@reduxjs/toolkit';
import {getFileFromFileList} from 'src/helper/helper';

import {
  notification,
  product as productService,
  fileStorage,
} from 'src/services/services';

const ActionType = {
  LOAD_PRODUCT: 'configuration-product/load-product',
  RESET_PRODUCT: 'configuration-product/reset-product',
};

const loadProduct = createAsyncThunk(ActionType.LOAD_PRODUCT, async (id) => {
  return await productService.getById(id);
});

const addProduct = (productPayload) => async () => {
  try {
    if (productPayload.image) {
      const image = getFileFromFileList(productPayload.image);
      productPayload.imgUrl = await fileStorage.uploadFile(image);
    }

    await productService.create({
      name: productPayload.name,
      description: productPayload.description,
      price: productPayload.price,
      discount: productPayload.discount,
      discountDate: productPayload.discountDate,
      imgUrl: productPayload.imgUrl,
    });
  } catch (err) {
    return notification.error('Error', err);
  }
};

const editProduct = (id, editPayload) => async () => {
  try {
    if (editPayload.image) {
      await fileStorage.deleteFile(editPayload.imgUrl.name);
      const image = getFileFromFileList(editPayload.image);
      editPayload.imgUrl = await fileStorage.uploadFile(image);
    }

    await productService.update(id, {
      name: editPayload.name,
      description: editPayload.description,
      price: editPayload.price,
      discount: editPayload.discount,
      discountDate: editPayload.discountDate,
      imgUrl: editPayload.imgUrl,
    });
  } catch (err) {
    return notification.error('Error', err);
  }
};

const resetState = createAction(ActionType.RESET_PRODUCT);

export {
  loadProduct,
  addProduct,
  editProduct,
  resetState,
};


