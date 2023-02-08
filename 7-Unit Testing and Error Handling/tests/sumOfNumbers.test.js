const {expect} = require('chai');
const sum = require('../sumOfNumbers');

describe ('sum of numbers', () => {
    it ('should return correct sum', () => {
        let arr = [1, 2, 3];
        expect(sum(arr)).to.be.equal(6);
    });

    it ('should return correct sum even if there is a string in the array', () => {
        let arr = [1, 2, 3, '5'];
        expect(sum(arr)).to.be.equal(11);
    });

    it ('should return 0 if the input array is empty', () => {
        let arr = [];
        expect(sum(arr)).to.be.equal(0);
    });

    it ('should return NaN if the input is not array', () => {
        let arr = 'string';
        expect(sum(arr)).to.be.NaN;
    });
})