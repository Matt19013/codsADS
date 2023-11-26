const fibonnaci = require('../codes/fibonacci');

test('Os primeiros números da devem ser corretos', () => {
  expect(fibonnaci(10)).toMatchObject([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
});

test('Os 2 primeiros números devem ser 0 e 1', () => {
  expect(fibonnaci(2)).toMatchObject([0, 1]);
});