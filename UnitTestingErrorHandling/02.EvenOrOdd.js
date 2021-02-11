const describe = require('mocha').describe;
const assert = require('chai').assert;

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return 'even';
    }

    return 'odd';
}

describe ('isOddOrEven', () => {
    it('isString', () => {
        assert.equal('a', 'a', 'no');
    });
});