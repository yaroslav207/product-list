const checkDimensionsImages = (file, min, max) => {
  const {width, height} = file;
  console.log(max, min);
  return width < max && width > min && height < max && height > min;
};

export {checkDimensionsImages};
