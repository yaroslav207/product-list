import Joi from 'joi';
import {
  AuthPayloadKey,
  AuthValidationMessage,
} from 'src/common/enums/enums';

const auth = Joi.object({
  [AuthPayloadKey.EMAIL]: Joi.string()
      .trim()
      .email({tlds: {allow: false}})
      .required()
      .messages({
        'string.empty': AuthValidationMessage.EMAIL_REQUIRE,
        'string.email': AuthValidationMessage.IS_NOT_EMAIL,
      }),
  [AuthPayloadKey.PASSWORD]: Joi.string()
      .trim()
      .required()
      .messages({
        'string.empty': AuthValidationMessage.PASSWORD_REQUIRE,
      }),
});

export {auth};
