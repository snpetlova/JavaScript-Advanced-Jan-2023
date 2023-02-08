const {expect} = require('chai');
const mathEnforcer = require('../mathEnforcer');

describe ('mathEnforcer', function() {
    describe('addFive', function() {
        it ('should return undefined if the parameter is not a number', function() {
            expect(mathEnforcer.addFive('string')).to.equal(undefined);
        });

        it ('should return undefined if the parameter is not a number', function() {
            expect(mathEnforcer.addFive([1])).to.equal(undefined);
        });

        it ('should return the correct sum', function() {
            expect(mathEnforcer.addFive(5)).to.equal(10);
        });

        it ('should return the correct sum', function() {
            expect(mathEnforcer.addFive(-6)).to.equal(-1);
        });

        it ('should return the correct sum', function() {
            expect(mathEnforcer.addFive(1.5)).to.equal(6.5);
        });
    })
});

describe('subtractTen', function() {
    it ('should return undefined if the parameter is not a number', function() {
        expect(mathEnforcer.subtractTen('string')).to.equal(undefined);
    });

    it ('should return undefined if the parameter is not a number', function() {
        expect(mathEnforcer.subtractTen([1])).to.equal(undefined);
    });

    it ('should return the correct sum', function() {
        expect(mathEnforcer.subtractTen(20)).to.equal(10);
    });

    it ('should return the correct sum', function() {
        expect(mathEnforcer.subtractTen(-5)).to.equal(-15);
    });

    it ('should return the correct sum', function() {
        expect(mathEnforcer.subtractTen(20.5)).to.equal(10.5);
    });
});

describe('sum', function() {
    it ('should return undefined if the parameters are not a number', function() {
        expect(mathEnforcer.sum('string', 'test')).to.equal(undefined);
    });

    it ('should return undefined if the parameters are not a number', function() {
        expect(mathEnforcer.sum([1], [2])).to.equal(undefined);
    });

    it ('should return undefined if the parameters are not a number', function() {
        expect(mathEnforcer.sum([1], 2)).to.equal(undefined);
    });

    it ('should return undefined if the parameters are not a number', function() {
        expect(mathEnforcer.sum(1, 'test')).to.equal(undefined);
    });

    it ('should return the correct sum', function() {
        expect(mathEnforcer.sum(20, 10)).to.equal(30);
    });

    it ('should return the correct sum', function() {
        expect(mathEnforcer.sum(-5, 15)).to.equal(10);
    });

    it ('should return the correct sum', function() {
        expect(mathEnforcer.sum(-5, -15)).to.equal(-20);
    });

    it ('should return the correct sum', function() {
        expect(mathEnforcer.sum(20.5, 10.5)).to.equal(31);
    });
});
