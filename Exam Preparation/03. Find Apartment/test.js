const { expect } = require('chai');
const findNewApartment = require('./findApartment');

describe ('isGoodLocation', () => {
    it ('checks if the city is correct', () => {
        const res = findNewApartment.isGoodLocation('Pernik', true);
        expect(res).to.equal('This location is not suitable for you.')
    })

    it ('checks value of the boolean', () => {
        const res = findNewApartment.isGoodLocation('Plovdiv', false);
        expect(res).to.equal('There is no public transport in area.')
    })

    it ('both values are correct', () => {
        const res = findNewApartment.isGoodLocation('Plovdiv', true);
        expect(res).to.equal('You can go on home tour!')
    })

    it ('invalid input', () => {
        expect(() => {
            findNewApartment.isGoodLocation(true, 1);
        }).to.throw();
    })

    it ('invalid input-2', () => {
        expect(() => {
            findNewApartment.isGoodLocation(5, 'sofia');
        }).to.throw();
    })

    it ('invalid input-2', () => {
        expect(() => {
            findNewApartment.isGoodLocation('ok', ['sofia']);
        }).to.throw();
    })
})

describe ('isLargeEnough', () => {
    it ('returns correct arr', () => {
        const apartments = [10, 20, 30];
        const minimalSquareMeters = 70;
        const res = findNewApartment.isLargeEnough(apartments, minimalSquareMeters);
        expect (res).to.equal('')
    })

    it ('returns correct arr-2', () => {
        const apartments = [10, 20, 30];
        const minimalSquareMeters = 10;
        const res = findNewApartment.isLargeEnough(apartments, minimalSquareMeters);
        expect (res).to.equal('10, 20, 30')
    })

    it ('returns correct arr-3', () => {
        const apartments = [10, 20, 30];
        const minimalSquareMeters = 5;
        const res = findNewApartment.isLargeEnough(apartments, minimalSquareMeters);
        expect (res).to.equal('10, 20, 30')
    })

    it ('invalid input', () => {
        expect(() => {
            findNewApartment.isLargeEnough([40, 50, 60], 'a');
        }).to.throw();
    })

    it ('invalid input-2', () => {
        expect(() => {
            findNewApartment.isLargeEnough('a', [40, 50, 60]);
        }).to.throw();
    })
    
    it ('invalid input-3', () => {
        expect(() => {
            findNewApartment.isLargeEnough([], 5);
        }).to.throw();
    })

    it ('invalid input-4', () => {
        expect(() => {
            findNewApartment.isLargeEnough([1, 2], 'a');
        }).to.throw();
    })
    
})

describe ('isItAffordable', () => {
    it ('budget is not enough', () => {
        const price = 100;
        const budget = 50;
        const res = findNewApartment.isItAffordable(price, budget);
        expect(res).to.equal(`You don't have enough money for this house!`)
    })

    it ('budget is enough', () => {
        const price = 100;
        const budget = 200;
        const res = findNewApartment.isItAffordable(price, budget);
        expect(res).to.equal(`You can afford this home!`)
    })

    it ('invalid input', () => {
        expect(() => {
            findNewApartment.isItAffordable([1, 2], 'a');
        }).to.throw();
    })

    it ('invalid input-2', () => {
        expect(() => {
            findNewApartment.isItAffordable([1, 2], 100);
        }).to.throw();
    })

    it ('invalid input-3', () => {
        expect(() => {
            findNewApartment.isItAffordable(100, 'a');
        }).to.throw();
    })

    it ('invalid input-4', () => {
        expect(() => {
            findNewApartment.isItAffordable(-100, 150);
        }).to.throw();
    })

    it ('invalid input-5', () => {
        expect(() => {
            findNewApartment.isItAffordable(100, -15);
        }).to.throw();
    })

    it ('invalid input-6', () => {
        expect(() => {
            findNewApartment.isItAffordable(0, 1);
        }).to.throw();
    })

    it ('invalid input-7', () => {
        expect(() => {
            findNewApartment.isItAffordable(1, 0);
        }).to.throw();
    })

    it ('invalid input-8', () => {
        expect(() => {
            findNewApartment.isItAffordable(0, 0);
        }).to.throw();
    })
})

