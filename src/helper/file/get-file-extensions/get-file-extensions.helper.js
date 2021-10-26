const Extension = {
  START: '.',
  SEPARATOR: ', ',
};

const getFileExtensions = (...extensions) => {
  return extensions.map((it) => Extension.START + it).join(Extension.SEPARATOR);
};

export {getFileExtensions};
