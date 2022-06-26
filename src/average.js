// Código implementado por Luiz Henrique
const average = (array) => {
  if (!Array.isArray(array) || array.length === 0) { return undefined; }
  if (array.find((element) => typeof element !== 'number') !== undefined) { return undefined; }

  return Math.round(array.reduce((cont, num) => cont + num, 0) / array.length);
};

module.exports = average;
