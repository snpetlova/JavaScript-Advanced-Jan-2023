const {expect} = require('chai');
const isSymmetric = require('../checkForSymmetry');

describe ('isSymetric', () => {

    it ('should return true if the input array is symmetric', () => {
        let arr = [1, 2, 2, 1];
        expect(isSymmetric(arr)).to.be.true;
    });

    it ('should return false if the input array is not symmetric', () => {
        let arr = [1, 2, 5];
        expect(isSymmetric(arr)).to.be.false;
    });

    it ('should return false if the input is not an array', () => {
        let data = 155;
        expect(isSymmetric(data)).to.be.false;
    });

    it ('should return true when the length is odd', () => {
        let arr = [1, 2, 1];
        expect(isSymmetric(arr)).to.be.true;
    });

    it ('should return false if the input array is not symmetric and has diff types', () => {
        let arr = [1, 2, '1'];
        expect(isSymmetric(arr)).to.be.false;
    });

    it ('should return false for array-like arg', () => {
        let arr = '1221';
        expect(isSymmetric(arr)).to.be.false;
    });

})