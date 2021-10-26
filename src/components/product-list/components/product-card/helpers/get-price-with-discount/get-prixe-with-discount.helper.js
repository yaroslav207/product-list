const getPriceWithDiscount = (price, discount) => {
  if (!price || !discount) return;
  return (price * ((100 - discount) / 100)).toFixed(2);
};

export {getPriceWithDiscount};
