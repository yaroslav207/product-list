import {fileExtensionValidation} from '../helpers/helpers';
import {FileExtension} from 'src/common/enums/enums';
import Joi from 'joi';

import {
  ProductPayloadKey,
  ProductValidationMessage,
} from 'src/common/enums/enums';


const product = Joi.object({
  [ProductPayloadKey.NAME]: Joi.string()
      .trim()
      .required()
      .messages({
        'string.empty': ProductValidationMessage.NAME_REQUIRE,
      }),
  [ProductPayloadKey.DESCRIPTION]: Joi.string().trim(),
  [ProductPayloadKey.IMAGE]: Joi.when(ProductPayloadKey.IMG_URL, {
    is: Joi.object().required(),
    then: Joi.object()
        .allow('')
        .custom(
            fileExtensionValidation(
                FileExtension.JPEG,
                FileExtension.JPG,
                FileExtension.PNG,
                FileExtension.SVG,
            ),
            'file extension validation',
        )
        .messages({
          'file.invalidExtension': ProductValidationMessage.DATA_URL_FORMAT_IMG,
        }),
    otherwise: Joi.object()
        .custom(
            fileExtensionValidation(
                FileExtension.JPEG,
                FileExtension.JPG,
                FileExtension.PNG,
                FileExtension.SVG,
            ),
            'file extension validation',
        )
        .messages({
          'file.invalidExtension': ProductValidationMessage.DATA_URL_FORMAT_IMG,
        }),
  }),
  [ProductPayloadKey.PRICE]: Joi.number()
      .min(0.01)
      .max(99999999.99)
      .required()
      .messages({}),
  [ProductPayloadKey.DISCOUNT]: Joi.number()
      .allow('')
      .min(1)
      .max(100)
      .messages({}),
  [ProductPayloadKey.DISCOUNT_DATE]: Joi.when(ProductPayloadKey.DISCOUNT, {
    is: Joi.number()
        .required(),
    then: Joi.date()
        .min(new Date()),
    otherwise: Joi.date()
        .min(new Date())
        .allow(''),
  }),
  [ProductPayloadKey.IMG_URL]: Joi.object()
      .allow(null),
});

export {product};
