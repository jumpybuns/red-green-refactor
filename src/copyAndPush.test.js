const { copyAndPush } = require('./copyAndPush')

describe('copyAndPush function', () => {
    const numbers = [1, 2, 3];
    const item = 42;
    it('Dan Bs the function', () => {

        const result = copyAndPush(numbers, item);

        expect(result)
            .toEqual([1, 2, 3, 42])
    });
    it('check to see if original is unchanged', () => {

        expect(numbers)
            .toEqual([1, 2, 3])
    });
});