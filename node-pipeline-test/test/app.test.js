const { multiply, divide } = require('../app');
const { expect } = require('chai');

describe('Math functions', () => {
    it('should multiply two numbers', () => {
        expect(multiply(3, 4)).to.equal(12);
    });

    it('should divide two numbers', () => {
        expect(divide(10, 2)).to.equal(5);
    });

    it('should throw error on division by zero', () => {
        expect(() => divide(10, 0)).to.throw('Division by zero');
    });
});
