const { fetchQuote } = require('./quotes')
const request = require('superagent');

jest.mock('superagent');


describe('use Futurama API to return a single quote', () => {
    it('fetches first futurama quote', async () => {
        request.get.mockResolvedValue({
            body: {
                results: [
                    {
                        character: "Bender",
                        quote: "I'm a fraud. A poor, lazy, sexy fraud.",
                        image: "https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png"
                    }
                ]
            }
        });

        const quote = await fetchQuote();
        expect(quote).toEqual({
            name: "Bender",
            text: "I'm a fraud. A poor, lazy, sexy fraud.",
            image: "https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png"
        });
    });
});