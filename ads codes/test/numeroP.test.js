const ehPrimo = require('../codes/numeroP'); 

describe('Teste da função ehPrimo', () => {
    test('números primos', () => {
        const primos = [2, 3, 5, 7, 11, 13];
        primos.forEach(n => {
            expect(ehPrimo(n)).toBe(true);
        });
    });

    test('números não primos', () => {
        const naoPrimos = [1, 4, 6, 8, 9, 10];
        naoPrimos.forEach(n => {
            expect(ehPrimo(n)).toBe(false);
        });
    });
});
