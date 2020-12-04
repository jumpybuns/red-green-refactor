const request = require('superagent');

const fetchQuote = async () => {
    const { body } = await request.get('futuramaapi.herokuapp.com/api/quotes')

    const { results: [{ character: name, quote: text, image }, ...rest] } = body;
    return { name, text, image }
};

module.exports = {
    fetchQuote
};