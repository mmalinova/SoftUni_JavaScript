const { assert } = require('chai');

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('not a number', () => {
            assert.isUndefined(mathEnforcer.addFive('e'));
            assert.isUndefined(mathEnforcer.addFive(undefined));
        });
        it('add five to the number', () => {
            assert.equal(mathEnforcer.addFive(0), 5);
            assert.equal(mathEnforcer.addFive(-5), 0);
            assert.equal(mathEnforcer.addFive(1.2), 6.2);
            assert.equal(mathEnforcer.addFive(1), 6);
        });
    });
    describe('subtractTen', () => {
        it('not a number', () => {
            assert.isUndefined(mathEnforcer.subtractTen('e'));
            assert.isUndefined(mathEnforcer.subtractTen(undefined));
        });
        it('subtract ten from number', () => {
            assert.equal(mathEnforcer.subtractTen(0), -10);
            assert.equal(mathEnforcer.subtractTen(-5), -15);
            assert.equal(mathEnforcer.subtractTen(10.2), 0.1999999999999993);
            assert.equal(mathEnforcer.subtractTen(1), -9);
            assert.equal(mathEnforcer.subtractTen(10), 0);
            assert.equal(mathEnforcer.subtractTen(20), 10);
        });
    });
    describe('sum', () => {
        it('first num is not a number', () => {
            assert.isUndefined(mathEnforcer.sum('e', 1));
            assert.isUndefined(mathEnforcer.sum(1, 'e'));
        });
        it('return correct sum', () => {
            assert.equal(mathEnforcer.sum(1, 1), 2);
            assert.equal(mathEnforcer.sum(1, -1), 0);
            assert.equal(mathEnforcer.sum(1, 0), 1);
            assert.equal(mathEnforcer.sum(-1, -1), -2);
            assert.equal(mathEnforcer.sum(-1.2, -1.3), -2.5);
            assert.equal(mathEnforcer.sum(1.3, -1.2), 0.10000000000000009);
        });
    });
});