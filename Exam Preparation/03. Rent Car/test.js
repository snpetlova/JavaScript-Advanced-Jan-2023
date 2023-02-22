const { expect } = require('chai');
const rentCar = require('./rentCar');

describe('Tests searchCar' , function () {
    it ('finds the submitted car', () => {
        const shopArr = ['a', 'b', 'c'];
        const model = 'b';

        const res = rentCar.searchCar(shopArr, model);
        expect (res).to.equal(`There is 1 car of model b in the catalog!`)
    })

    it ('invalid param for shop', () => {
        expect(() => {
            rentCar.searchCar(7, 'b');
        }).to.throw();
    })

    it ('invalid param for model', () => {
        expect(() => {
            rentCar.searchCar(['a', 'b'], 8);
        }).to.throw();
    })

    it ('model not found', () => {
        expect(() => {
            rentCar.searchCar(['a', 'b'], 'c');
        }).to.throw();
    })
})

describe('Tests calculatePriceOfCar', function() {
    it('invalid param for model', () => {
        expect(() => {
            rentCar.calculatePriceOfCar(5, 6);
        }).to.throw();
    })

    it('invalid param for days', () => {
        expect(() => {
            rentCar.calculatePriceOfCar('audi', 6);
        }).to.throw();
    })

    it('returns correct price for curr model', () => {
        const res = rentCar.calculatePriceOfCar('Audi', 2);
        expect(res).to.equal('You choose Audi and it will cost $72!')
    })

    it('model not found', () => {
        expect(() => {
            rentCar.calculatePriceOfCar('b', 6);
        }).to.throw();
    })
})

describe('Tests checkBudget', function() {
    it('invalid param for costPerDay', () => {
        expect(() => {
            rentCar.checkBudget('1', 2, 3);
        }).to.throw();
    })

    it('invalid param for days', () => {
        expect(() => {
            rentCar.checkBudget(1, '2', 3);
        }).to.throw();
    })

    it('invalid param for budget', () => {
        expect(() => {
            rentCar.checkBudget(1, 2, '3');
        }).to.throw();
    })

    it('can be afforded', () => {
        const res = rentCar.checkBudget(1, 1, 1);
        expect(res).to.equal('You rent a car!')
    })

    it('can be afforded - 2', () => {
        const res = rentCar.checkBudget(5, 1, 10);
        expect(res).to.equal('You rent a car!')
    })

    it('cannnot  be afforded - 2', () => {
        const res = rentCar.checkBudget(1, 3, 1);
        expect(res).to.equal('You need a bigger budget!')
    })
})