/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
// Código implementado por Luiz Henrique
const circle = require('../src/circle');

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contendo os valores esperados', () => {
    expect(circle()).toBeUndefined();
    expect(circle('teste')).toBeUndefined();
    expect(typeof circle(1)).toEqual('object');
    expect(Object.keys(circle(3)).length).toBe(3);
    expect(circle(2).circumference).toBeCloseTo(12.56, 2);
    expect(circle(3)).toEqual({radius:3, area:28.259999999999998, circumference:18.84});
  });
});