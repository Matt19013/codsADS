const sum = require('../codes/soma');

test('a soma de 1 e 2 é igual a 3', () => {
  expect(sum(1, 2)).toBe(3);
});
test('a soma de -10 e 30 é igual a 20', () => {
  expect(sum((-10), 30)).toBe(20);
});