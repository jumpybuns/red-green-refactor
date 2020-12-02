const { capitalizeAndFilter } = require('./capAndFilter')

describe('capAndFilt function', () => {
    it('capitalize and filter out words that start with F', () => {
        const names = ['spot', 'rover', 'bingo', 'fred']
        const result = capitalizeAndFilter(names)

        expect(result)
            .toEqual(['SPOT', 'ROVER', 'BINGO'])
    })

})