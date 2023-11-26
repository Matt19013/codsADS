const QuirkSorte = require('../codes/QuirkSort'); 

describe('Teste da função ordenar', () => {
    test('ordenar [3, 1, 4, 1, 5, 9] deve retornar [1, 1, 3, 4, 5, 9]', () => {
        expect(QuirkSorte([3, 1, 4, 1, 5, 9])).toEqual([1, 1, 3, 4, 5, 9]);
    });

    test('ordenar [5, 2, 8, 9, 1, 3] deve retornar [1, 2, 3, 5, 8, 9]', () => {
        expect(QuirkSorte([5, 2, 8, 9, 1, 3])).toEqual([1, 2, 3, 5, 8, 9]);
    });

    test('ordenar [7, 6, 5, 4, 3, 2, 1] deve retornar [1, 2, 3, 4, 5, 6, 7]', () => {
        expect(QuirkSorte([7, 6, 5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });
});
