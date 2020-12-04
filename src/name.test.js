const { getName } = require('./name');

describe('getName function', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };

    it('returns the name ya dingus', () => {
        const name = getName(spot);

        expect(name)
            .toEqual('spot')
    })
});