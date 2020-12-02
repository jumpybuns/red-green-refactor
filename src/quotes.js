const request = require('superagent');

const fetchQuote = async () => {
    const response = await request.get('http://futuramaapi.herokuapp.com/api/quotes')

    const results = response.body[0];
    const singleQuote = {
        name: results.character,
        text: results.quote,
        image: results.image
    };
    return singleQuote;
}

module.exports = {
    fetchQuote
};