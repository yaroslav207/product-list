import Joi from 'joi';
import {
  CommentsPayloadKey,
  CommentsValidationMessage,
} from 'src/common/enums/enums';

const createComment = Joi.object({
  [CommentsPayloadKey.NAME]: Joi.string()
      .trim()
      .required()
      .messages({
        'string.empty': CommentsValidationMessage.NAME_REQUIRE,
      }),
  [CommentsPayloadKey.TEXT]: Joi.string()
      .trim()
      .required()
      .messages({
        'string.empty': CommentsValidationMessage.TEXT_REQUIRE,
      }),
});

export {createComment};
