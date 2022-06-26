/* eslint-disable max-len */
// Código implementado por Luiz Henrique
const restaurant = {};

const createMenu = (products) => {
  restaurant.fetchMenu = () => products;
  restaurant.consumption = [];
  restaurant.order = (request) => restaurant.consumption.push(request);
  restaurant.pay = () => {
    const productsAndValues = [];
    Object.entries(products).forEach((element) => {
      productsAndValues.push(...Object.entries(element[1]));
    });

    return restaurant.consumption.reduce((value, order) => {
      let product = productsAndValues.find((elem) => elem[0] === order);
      if (product) { return product[1] + value; }
      return value;
    }, 0) * 1.1;
  };
  return restaurant;
};

module.exports = createMenu;
