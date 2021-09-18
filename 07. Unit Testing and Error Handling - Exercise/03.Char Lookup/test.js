let assert = require('chai').assert;
let {lookupChar} = require('./Char Lookup');

describe ('lookup char', () => {
    it('it should return undefined if the index is a floatin-point number', () => {
        assert.equal(undefined, lookupChar('test', 5.55));
    });
    it('it should return undefined if the typeof the first parameter is not a string', () => {
        assert.equal(undefined, lookupChar(5, 3));
    });
    it('it should return "Incorrect index" if the index is smaller than 0', () => {
        assert.equal('Incorrect index', lookupChar('test', -5));
    });
    it('it should return "Incorrect index" if the index is greater than the string length', () => {
        assert.equal('Incorrect index', lookupChar('test', 10));
    });
    it('it should return the char of the string at the specified index', () => {
        assert.equal('s', lookupChar('test', 2));
    });
});