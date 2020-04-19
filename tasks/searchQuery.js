const request = require('request');
const util = require('util');


module.exports = async (inputs) => {
    const requestPromise = util.promisify(request);
    const url = 'https://api.duckduckgo.com/?q=' + inputs.query + '&format=json&pretty=1';
    const response = await requestPromise(url);
    return {
        result: JSON.parse(response.body)
    }

};
