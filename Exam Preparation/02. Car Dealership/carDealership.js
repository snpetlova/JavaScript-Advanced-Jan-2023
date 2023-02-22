class CarDealership {

    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0
    }

    addCar(model, horsepower, price, mileage) {

        if (!this._validateModel(model) 
        || !this._validateHorsepower(horsepower) 
        || !this._validatePriceAndMileage(price) 
        || !this._validatePriceAndMileage(mileage)) {
            throw new TypeError ('Invalid input!');
        }

        this.availableCars.push({model, horsepower, price, mileage});

        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`

    }

    sellCar(model, desiredMileage) {
        const index = this.availableCars.findIndex(car => car.model == model);
        const match = this.availableCars[index];

        if (match === undefined) {
            throw new TypeError(`${model} was not found!`)
        }

        let mileageDiff = match.mileage - desiredMileage;

        const sold = {
            model: match.model,
            horsepower: match.horsepower
        };

        if (mileageDiff <= 0) {
            sold.soldPrice = match.price;
        } else if (mileageDiff <= 40000) {
            sold.soldPrice = match.price * 0.95;
        } else {
            sold.soldPrice = match.price * 0.90;
        }

        this.soldCars.push(sold);
        this.availableCars.splice(index, 1);

        this.totalIncome += sold.soldPrice;

        return `${model} was sold for ${sold.soldPrice.toFixed(2)}$`
    }

    currentCar() {
        if (this.availableCars.length === 0) {
            return `There are no available cars`;
        }

        const res = this.availableCars.map(car => `---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`);
        res.unshift(`-Available cars:`);

        return res.join('\n');
    }

    salesReport(criteria) {
        if (criteria == 'horsepower') {
            this.soldCars.sort((a,b) => b.horsepower - a.horsepower);
        } else if (criteria == 'model') {
            this.soldCars.sort((a,b) => a.model.localeCompare(b.model));
        } else {
            throw new TypeError ('Invalid criteria!')
        }

        const res = this.soldCars.map(car => `---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$`)
        res.unshift(`-${this.soldCars.length} cars sold:`);
        res.unshift(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`);

        return res.join('\n');

    }

    _validateModel(value) {
            return typeof value == 'string' && value != '';
    }

    _validateHorsepower(value) {
        return Number.isInteger(value) && value >= 0;
    }

    _validatePriceAndMileage(value) {
        return typeof value == 'number' && value >=0;
    }

}

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));