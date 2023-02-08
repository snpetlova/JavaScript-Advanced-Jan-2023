const {expect} = require('chai');
const lookupChar = require('../charLookup');

describe ('tests for lookupChar ex', () => {
    it ('should return undefined if first argument is not a string', () => {
        expect(lookupChar(1,1)).to.equal(undefined);
    });

    it ('should return undefined if first argument is not a string', () => {
        expect(lookupChar(['test'],1)).to.equal(undefined);
    });

    it ('should return undefined if arguments are not correct', () => {
        expect(lookupChar('assff', 'adafs')).to.equal(undefined);
    });

    it ('should return undefined if second argument is not a number', () => {
        expect(lookupChar(1,'a')).to.equal(undefined);
    });

    it ('should return undefined if second argument is not a number', () => {
        expect(lookupChar('test',[1])).to.equal(undefined);
    });

    it ('should return undefined if second argument is not an integer number', () => {
        expect(lookupChar('test', 2.8)).to.equal(undefined);
    });

    it ('should return incorrect index if the value of the index is lower than zero', () => {
        expect(lookupChar('test', -1)).to.equal('Incorrect index');
    });

    it ('should return incorrect index if the value of the index is outside boundry', () => {
        expect(lookupChar('test', 6)).to.equal('Incorrect index');
    });

    it ('should return incorrect index if the value of the index is equal to the string length', () => {
        expect(lookupChar('test', 4)).to.equal('Incorrect index');
    });

    it ('should return correct char at the given index', () => {
        expect(lookupChar('test', 0)).to.equal('t');
    });

    it ('should return correct char at the given index', () => {
        expect(lookupChar('test', 3)).to.equal('t');
    });

    it ('should return correct char at the given index', () => {
        expect(lookupChar('test', 1)).to.equal('e');
    });

})