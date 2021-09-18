let assert = require('chai').assert;
let {isOddOrEven} = require('./Even or Odd');

describe('is odd or even', () => {
    it('should return undefined, if the passed parameter is of type number', () => {
        assert.equal(undefined, isOddOrEven(5));
    });
    it('should return undefined, if the passed parameter is of type object', () => {
        assert.equal(undefined, isOddOrEven([1, 2, 3]));
    });
    it('should return even, if the passed parameter is of type string and the length of the string is even number', () => {
        assert.equal('even', isOddOrEven('test'));
    });
    it('should return odd, if the passed parameter is of type string and the length of the string is odd number', () => {
        assert.equal('odd', isOddOrEven('testing'));
    });
});