const {expect} = require('chai');
const createCalculator = require('../addSubtract');

describe('tests for add and subtract ex', () => {
    it('should return object add', () => {
        expect(createCalculator().hasOwnProperty('add')).to.be.true;
    });

    it('should return object subtract', () => {
        expect(createCalculator().hasOwnProperty('subtract')).to.be.true;
    });

    it('should return object get', () => {
        expect(createCalculator().hasOwnProperty('get')).to.be.true;
    });

    it('should return false if there is value unreachable from the outside', () => {
        expect(createCalculator().hasOwnProperty('value')).to.be.false;
    });

    it('should parse if there is input string to a number', () => {
        const calc = createCalculator();
        calc.add(5);
        calc.add('5')
        expect(calc.get()).to.equal(10);
    });

    it('should print the correct sum with the diff objects', () => {
        const calc = createCalculator();
        calc.add(16);
        calc.subtract(8);
        expect(calc.get()).to.equal(8);
    });

    it('should print the correct sum with the diff objects', () => {
        const calc = createCalculator();
        calc.add(16);
        calc.subtract(8);
        calc.add('2');
        expect(calc.get()).to.equal(10);
    });
})