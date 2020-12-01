const { copyAndPush } = require('./copyAndPush')

describe('copyAndPush function', () => {
    it('Dan Bs the function', () => {
        const numbers = [1, 2, 3];
        const result = copyAndPush(numbers, 4);

        expect(result)
            .toEqual(4)
    })
})