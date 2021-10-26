import {getFileFromFileList} from 'src/helper/helper';

const emptyFileListValidation = (image, helpers) => {
  const file = getFileFromFileList(image);

  if (!file) {
    return image;
  }

  return helpers.error('file.fileListIsNotEmpty');
};

export {emptyFileListValidation};
