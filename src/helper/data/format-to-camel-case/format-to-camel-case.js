import {camelKeys} from 'js-convert-case';

const formatToCamelCase = (arr) => {
  const res = camelKeys(arr, {
    recursive: true,
    recursiveInArray: true,
  });
  return res;
};

export {formatToCamelCase};

