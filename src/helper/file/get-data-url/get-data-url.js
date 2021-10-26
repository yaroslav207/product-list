const getDataUrl = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.addEventListener(
        'load',
        () => {
          resolve(fileReader.result);
        },
        {
          once: true,
        },
    );

    fileReader.addEventListener(
        'error',
        () => {
          reject(fileReader.error);
        },
        {
          once: true,
        },
    );

    fileReader.readAsDataURL(file);
  });
};

export {getDataUrl};
