import {getFileFromFileList} from 'src/helper/helper';

const fileExtensionValidation = (...fileExtensions) =>
  (image, helpers) => {
    const file = getFileFromFileList(image);

    console.log(file);

    if (!file) {
      return image;
    }

    const fileExtension = file.name.split('.').pop();
    const isFileExtensionValid = fileExtensions.some(
        (validExtension) => validExtension === fileExtension,
    );

    if (!isFileExtensionValid) {
      return helpers.error('file.invalidExtension');
    }

    return image;
  };

export {fileExtensionValidation};
