import products from '../data/products.js';

const priceFormat = function () {
  const price = products.map((product) => product.price);

  console.log(price);
};
