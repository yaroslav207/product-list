import {
  ProductPayloadKey,
} from 'src/common/enums/enums';

const DEFAULT_CREATE_PRODUCT_PAYLOAD = {
  [ProductPayloadKey.NAME]: '',
  [ProductPayloadKey.DESCRIPTION]: '',
  [ProductPayloadKey.PRICE]: 0,
  [ProductPayloadKey.IMAGE]: '',
  [ProductPayloadKey.DISCOUNT]: '',
  [ProductPayloadKey.DISCOUNT_DATE]: '',
  [ProductPayloadKey.IMG_URL]: null,
};

export {DEFAULT_CREATE_PRODUCT_PAYLOAD};
