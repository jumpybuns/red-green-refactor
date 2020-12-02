const { returnQuote } = require('./quotes')

describe('get single quote', () => {
    const expected = {
        name: "Bender",
        text: "I'm a fraud. A poor, lazy, sexy fraud.",
        image: "https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png"
    };
    it('return single futurama quote', () => {
        const result = {
            name: "Bender",
            text: "I'm a fraud. A poor, lazy, sexy fraud.",
            image: "https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png"
        }

        expect(expected)
            .toEqual(result)

    })
})