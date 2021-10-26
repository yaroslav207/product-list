const changeNameImage = (newName, currentName) => {
  const arr = currentName.split('.');
  return `${newName}.${arr[arr.length - 1]}`;
};

export {changeNameImage};
