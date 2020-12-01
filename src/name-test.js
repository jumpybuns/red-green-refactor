const { getName } = require('/name');

describe('getName function', () => {
    it('returns the name ya dingus', () => {
        const name = getName('spot');

        expect(name)
            .toEqual('spot')
    })
})