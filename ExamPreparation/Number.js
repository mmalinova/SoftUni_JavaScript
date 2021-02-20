const { assert } = require("chai");

const numberOperations = {
    powNumber: function (num) {
        return num * num;
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input < 100) {
            return 'The number is lower than 100!';
        } else {
            return 'The number is greater or equal to 100!';
        }
    },
    sumArrays: function (array1, array2) {

        const longerArr = array1.length > array2.length ? array1 : array2;
        const rounds = array1.length < array2.length ? array1.length : array2.length;

        const resultArr = [];

        for (let i = 0; i < rounds; i++) {
            resultArr.push(array1[i] + array2[i]);
        }

        resultArr.push(...longerArr.slice(rounds));

        return resultArr;
    }
};

describe('numberOperations', function () {
    describe('powNumber', function () {
        it('return num', function () {
            assert.equal(numberOperations.powNumber(2), 4);
            assert.equal(numberOperations.powNumber(-2), 4);
            assert.equal(numberOperations.powNumber(0), 0);
            assert.equal(numberOperations.powNumber(2.2), 4.840000000000001);
        });
    });
    describe('numberChecker', function () {
        it('not num', function () {
            assert.throw(() => numberOperations.numberChecker(undefined), 'The input is not a number!');
            assert.throw(() => numberOperations.numberChecker(NaN), 'The input is not a number!');
            assert.throw(() => numberOperations.numberChecker({}), 'The input is not a number!');
            assert.throw(() => numberOperations.numberChecker('37,5'), 'The input is not a number!');
            assert.throw(() => numberOperations.numberChecker('123ABC'), 'The input is not a number!');
            assert.throw(() => numberOperations.numberChecker(new Date().toString()), 'The input is not a number!');
            assert.throw(() => numberOperations.numberChecker('ass'), 'The input is not a number!');
        });
        it('< 100', function () {
            assert.equal(numberOperations.numberChecker(-9), 'The number is lower than 100!');
            assert.equal(numberOperations.numberChecker(99), 'The number is lower than 100!');
            assert.equal(numberOperations.numberChecker(0), 'The number is lower than 100!');
            assert.equal(numberOperations.numberChecker(2.2), 'The number is lower than 100!');
        });
        it('>= 100', function () {
            assert.equal(numberOperations.numberChecker(100), 'The number is greater or equal to 100!');
            assert.equal(numberOperations.numberChecker(1000), 'The number is greater or equal to 100!');
            assert.equal(numberOperations.numberChecker(150), 'The number is greater or equal to 100!');
            assert.equal(numberOperations.numberChecker(101), 'The number is greater or equal to 100!');
        });
    });
    describe('sumArrays', function () {
        it('array1 is longer', function () {
            let arr1 = [1, 2, 3, 4];
            let arr2 = [1, 2, 3];
            let result = [2, 4, 6, 4];
            assert.deepEqual(numberOperations.sumArrays(arr1, arr2), [ 2, 4, 6, 4 ]);
            arr1 = [-1, -2, -3, -4];
            arr2 = [1, 2, 3];
            result = [0, 0, 0, -4];
            assert.deepEqual(numberOperations.sumArrays(arr1, arr2), result);
            arr1 = [1, 2, 3, 4];
            arr2 = [1.1, 2.1, 3.1];
            result = [2.1, 4.1, 6.1, 4];
            assert.deepEqual(numberOperations.sumArrays(arr1, arr2), result);
        });
        it('array2 is longer', function () {
            let arr1 = [1, 2, 3];
            let arr2 = [1, 2, 3, 4];
            let result = [2, 4, 6, 4];
            assert.deepEqual(numberOperations.sumArrays(arr1, arr2), result);
            arr1 = [1, 2, 3];
            arr2 = [1.1, 2.1, 3.1, 3];
            result = [2.1, 4.1, 6.1, 3];
            assert.deepEqual(numberOperations.sumArrays(arr1, arr2), result);
        });

        it('equals', function () {
            let arr1 = [1, 2, 3, 4];
            let arr2 = [1, 2, 3, 4];
            let result = [2, 4, 6, 8];
            assert.deepEqual(numberOperations.sumArrays(arr1, arr2), result);
            arr1 = [1, 2, 3, 4];
            arr2 = [1.1, 2.1, 3.1, 3];
            result = [2.1, 4.1, 6.1, 7];
            assert.deepEqual(numberOperations.sumArrays(arr1, arr2), result);
        });
    });
});

