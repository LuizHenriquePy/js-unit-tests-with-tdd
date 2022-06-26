// Código implementado por Luiz Henrique
const productDetails = require('../src/productDetails');

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    const array = productDetails('batata', 'cerveja');
    expect(typeof productDetails).toEqual('function');
    expect(typeof array).toEqual('object');
    expect(array.length).toBe(2);
    expect(array.every(element => typeof element === 'object')).toBeTruthy();
    expect(array[0].name !== array[1].name).toBeTruthy();
    expect(array[0].details.productId.indexOf('123') !== -1).toBeTruthy();
    expect(array[1].details.productId.indexOf('123') !== -1).toBeTruthy();
  });
});
