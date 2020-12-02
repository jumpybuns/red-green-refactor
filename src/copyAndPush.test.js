const { copyAndPush } = require('./copyAndPush')

describe('copyAndPush function', () => {
    it('Dan Bs the function', () => {
        const numbers = [1, 2, 3];
        const result = copyAndPush(numbers, 4);

        expect(result)
            .toEqual(4)
    })
})

describe('unchanged original', () => {
    it('check to see if original is unchanged', () => {
        const originalArray = [1, 2, 3];
        const originalResult = copyAndPush(originalArray);

        expect(originalResult)
            .toEqual(4)
    })
})