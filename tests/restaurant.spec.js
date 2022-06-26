// Código implementado por Luiz Henrique
const createMenu = require('../src/restaurant');

describe('10 - Implemente os casos de teste e a função `createMenu`', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    const products = { food: {}, drink: {} };
    let menu = createMenu(products);
    expect(typeof menu.fetchMenu).toEqual('function');

    expect(Object.keys(menu.fetchMenu())).toEqual(['food', 'drink']);

    expect(menu.fetchMenu()).toEqual(products);

    expect(menu.consumption).toEqual([]);

    menu.order('coxinha');
    expect(menu.consumption).toEqual(['coxinha']);
  
    menu = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} });
    menu.order("coxinha");
    menu.order("agua");
    menu.order("sopa");
    menu.order("sashimi");
    expect(menu.consumption).toEqual(["coxinha", "agua", "sopa", "sashimi"]);

    menu = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} });
    menu.order('coxinha');
    menu.order('agua');
    menu.order('coxinha');
    expect(menu.consumption).toEqual(['coxinha', 'agua', 'coxinha']);

    menu = createMenu({ food: {'coxinha': 4, 'sopa': 9.9}, drink: {'agua': 2, 'cerveja': 6.9} });
    menu.order('coxinha');
    menu.order('agua');
    menu.order('coxinha');
    expect(menu.pay()).toBe(11);
  });
});
