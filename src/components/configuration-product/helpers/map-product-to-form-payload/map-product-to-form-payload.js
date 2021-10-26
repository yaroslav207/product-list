const mapProductToFormPayload = (product) => ({
  name: product.name,
  description: product.description,
  price: product.price,
  discount: product.discount || '',
  discountDate: product.discountDate
      ? new Date(product.discountDate.seconds * 1000).toISOString().substring(0, 10)
      : '',
  image: '',
  imgUrl: product.imgUrl,
});

export {mapProductToFormPayload};
