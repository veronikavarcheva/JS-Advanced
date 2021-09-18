let {assert, expect} = require('chai');
let {mathEnforcer} = require('./Math Enforcer');

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('should return undefined with a non-number parameter', ()=> {
            assert.isUndefined(mathEnforcer.addFive('test'));
            assert.isUndefined(mathEnforcer.addFive(undefined));
        });
        it('should return correct result with a number parameter', ()=> {
            assert.equal(mathEnforcer.addFive(5), 10);
        });
        it('should return correct result with a number parameter', ()=> {
            assert.equal(mathEnforcer.addFive(0), 5);
        });
        it('should return correct result with a number parameter', ()=> {
            assert.equal(mathEnforcer.addFive(-5), 0);
        });
        it('should return correct result with a number parameter', ()=> {
            expect(mathEnforcer.addFive(5.6333)).to.be.closeTo(10.63, 0.01);
        });
    });
    describe('subtractTen', () => {
        it('should return undefined with a non-number parameter', ()=> {
            assert.isUndefined(mathEnforcer.subtractTen('test'));
            assert.isUndefined(mathEnforcer.subtractTen(undefined));
        });
        it('should return correct result with a number parameter', ()=> {
            assert.equal(mathEnforcer.subtractTen(5), -5);
        });
        it('should return correct result with a number parameter', ()=> {
            assert.equal(mathEnforcer.subtractTen(0), -10);
        });
        it('should return correct result with a number parameter', ()=> {
            assert.equal(mathEnforcer.subtractTen(-5), -15);
        });
        it('should return correct result with a number parameter', ()=> {
            expect(mathEnforcer.subtractTen(5.633)).to.be.closeTo(-4.37, 0.01);
        });
    });
    describe('sum', () => {
        it('should return undefined with a non-number parameter', ()=> {
            assert.isUndefined(mathEnforcer.sum('test', 5));
            assert.isUndefined(mathEnforcer.sum(6, 'test'));
        });
        it('should return correct result with number parameters', ()=> {
            assert.equal(mathEnforcer.sum(5, 10), 15);
        });
        it('should return correct result with number parameters', ()=> {
            assert.equal(mathEnforcer.sum(0, 0), 0);
        });
        it('should return correct result with number parameters', ()=> {
            assert.equal(mathEnforcer.sum(-5, -10), -15);
        });
        it('should return correct result with number parameters', ()=> {
            expect(mathEnforcer.sum(5.633, 4.333)).to.be.closeTo(9.97, 0.01);
        });
    });
});

// describe('mathEnforcer', () => {
//     describe('addFive', () => {
//         it('should return undefined with a non-number parameter', ()=> {
//             assert.equal(undefined, mathEnforcer.addFive('test'));
//         });
//         it('should return undefined with a non-number parameter', ()=> {
//             assert.equal(undefined, mathEnforcer.addFive(undefined));
//         });
//         it('should return correct result with a number parameter', ()=> {
//             assert.equal(10, mathEnforcer.addFive(5));
//         });
//         it('should return correct result with a number parameter', ()=> {
//             assert.equal(5, mathEnforcer.addFive(0));
//         });
//         it('should return correct result with a number parameter', ()=> {
//             assert.equal(0, mathEnforcer.addFive(-5));
//         });
//         it('should return correct result with a number parameter', ()=> {
//             expect(mathEnforcer.addFive(5.6333)).to.be.closeTo(10.63, 0.01);
//         });
//     });
//     describe('subtractTen', () => {
//         it('should return undefined with a non-number parameter', ()=> {
//             assert.equal(undefined, mathEnforcer.subtractTen('test'));
//         });
//         it('should return undefined with a non-number parameter', ()=> {
//             assert.equal(undefined, mathEnforcer.subtractTen(undefined));
//         });
//         it('should return correct result with a number parameter', ()=> {
//             assert.equal(-5, mathEnforcer.subtractTen(5));
//         });
//         it('should return correct result with a number parameter', ()=> {
//             assert.equal(-10, mathEnforcer.subtractTen(0));
//         });
//         it('should return correct result with a number parameter', ()=> {
//             assert.equal(-15, mathEnforcer.subtractTen(-5));
//         });
//         it('should return correct result with a number parameter', ()=> {
//             expect(mathEnforcer.subtractTen(5.633)).to.be.closeTo(-4.37, 0.01);
//         });
//     });
//     describe('sum', () => {
//         it('should return undefined with a non-number parameter', ()=> {
//             assert.equal(undefined, mathEnforcer.sum('test', 5));
//         });
//         it('should return undefined with a non-number parameter', ()=> {
//             assert.equal(undefined, mathEnforcer.sum(3, 'test'));
//         });
//         it('should return correct result with number parameters', ()=> {
//             assert.equal(15, mathEnforcer.sum(5, 10));
//         });
//         it('should return correct result with number parameters', ()=> {
//             assert.equal(0, mathEnforcer.sum(0, 0));
//         });
//         it('should return correct result with number parameters', ()=> {
//             assert.equal(-15, mathEnforcer.sum(-5, -10));
//         });
//         it('should return correct result with number parameters', ()=> {
//             expect(mathEnforcer.sum(5.633, 4.333)).to.be.closeTo(9.97, 0.01);
//         });
//     });
// });