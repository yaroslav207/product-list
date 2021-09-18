import {joiResolver} from '@hookform/resolvers/joi';

const getResolver = (validationSchema) => {
  return joiResolver(validationSchema);
};

export {getResolver};
