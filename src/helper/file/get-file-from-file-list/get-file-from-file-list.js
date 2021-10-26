const getFileFromFileList = (payload) => {
  const [file] = payload ?? [];
  return file;
};

export {getFileFromFileList};
