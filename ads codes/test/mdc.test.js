const mdc = require('../codes/mdc');

describe('Teste da função mdc', () => {
    test('mdc de 48 e 18 deve ser 6', () => {
        expect(mdc(48, 18)).toBe(6);
    });

    test('mdc de 101 e 103 deve ser 1', () => {
        expect(mdc(101, 103)).toBe(1);
    });

    test('mdc de 111 e 259 deve ser 37', () => {
        expect(mdc(111, 259)).toBe(37);
    });
});