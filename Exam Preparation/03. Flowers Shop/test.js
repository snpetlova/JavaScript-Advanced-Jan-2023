const { expect } = require('chai');
const flowerShop = require('./flowerShop');

describe("calcPriceOfFlowers", function () {
    it('invalid param for flower', () => {
        expect(() => {
            flowerShop.calcPriceOfFlowers(1, 2, 1);
        }).to.throw();
    });

    it('invalid param for price', () => {
        expect(() => {
            flowerShop.calcPriceOfFlowers('tulip', 'rose', 1);
        }).to.throw();
    });

    it('invalid param for quantity', () => {
        expect(() => {
            flowerShop.calcPriceOfFlowers('tulip', 1, 'rose');
        }).to.throw();
    });

    it('returns correct res', () => {
        const res = flowerShop.calcPriceOfFlowers('tulip', 1, 2);
        expect(res).to.equal(`You need $2.00 to buy tulip!`)
    })
});

describe("checkFlowersAvailable", function () {
    it ('flower is available', () => {
        const flower = 'a';
        const gardenArr = ['b', 'a', 'c'];

        const res = flowerShop.checkFlowersAvailable(flower, gardenArr);
        expect (res).to.equal(`The a are available!`)
    })

    it ('flower is not available', () => {
        const flower = 'a';
        const gardenArr = ['b', 'c'];

        const res = flowerShop.checkFlowersAvailable(flower, gardenArr);
        expect (res).to.equal(`The a are sold! You need to purchase more!`)
    })
});

describe("sellFlowers", function () {
    it('invalid param for gardenArr', () => {
        expect(() => {
            flowerShop.sellFlowers('a', 1);
        }).to.throw();
    });

    it('invalid param for space', () => {
        expect(() => {
            flowerShop.sellFlowers(['a', 'b'], 'a');
        }).to.throw();
    });

    it ('returns correct result', () => {
        const gardenArr = ['b', 'a', 'c'];
        const space = 1;

        const res = flowerShop.sellFlowers(gardenArr, space);
        expect (res).to.equal(`b / c`)
    })

    it ('returns correct result - 2', () => {
        const gardenArr = ['b', 'a', 'c'];
        const space = 2;

        const res = flowerShop.sellFlowers(gardenArr, space);
        expect (res).to.equal(`b / a`)
    })

});