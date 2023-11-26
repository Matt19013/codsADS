const contagem = require('../codes/contagem'); 
describe('Teste da função contagem', () => {
  
    let consoleLogSpy;

    beforeEach(() => {
        consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(() => {
        consoleLogSpy.mockRestore();
    });

    test('contagem até 3', () => {
        contagem(3);
        expect(consoleLogSpy).toHaveBeenCalledTimes(3);
        expect(consoleLogSpy).toHaveBeenNthCalledWith(1, 1);
        expect(consoleLogSpy).toHaveBeenNthCalledWith(2, 2);
        expect(consoleLogSpy).toHaveBeenNthCalledWith(3, 3);
    });

    test('contagem até 5', () => {
        contagem(5);
        expect(consoleLogSpy).toHaveBeenCalledTimes(5);
        for (let i = 1; i <= 5; i++) {
            expect(consoleLogSpy).toHaveBeenNthCalledWith(i, i);
        }
    });
});
