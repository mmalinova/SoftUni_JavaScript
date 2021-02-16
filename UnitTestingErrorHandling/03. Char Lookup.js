const { assert } = require('chai');

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return 'Incorrect index';
    }

    return string.charAt(index);
}

describe('lookupChar', () => {
    it ('not a string', () => {
        assert.equal(lookupChar(9, 2), undefined);
    });
    it ('number is not an integer', () => {
        assert.equal(lookupChar('str', 2.3), undefined);
    });
    it ('number is not a number', () => {
        assert.equal(lookupChar('str', 'str'), undefined);
    });
    it ('index is below he length', () => {
        assert.equal(lookupChar('str', -1), 'Incorrect index');
    });
    it ('index is above he length', () => {
        assert.equal(lookupChar('str', 5), 'Incorrect index');
    });
    it ('return correct char', () => {
        assert.equal(lookupChar('str', 1), 't');
    });
});
