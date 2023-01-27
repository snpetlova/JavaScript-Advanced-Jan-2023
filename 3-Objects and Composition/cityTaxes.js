function cityTaxes(name, population, treasury) {

    let city = {
        name,
        population: Number(population),
        treasury: Number(treasury),
        taxRate: 10,

        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },

        applyGrowth(percent) {
            this.population += Math.floor(this.population * percent / 100);
        },

        applyRecession(percent) {
            this.treasury -= Math.floor(this.treasury * percent / 100)
        },
    };

    return city;

}

const city =
    cityTaxes('Tortuga',
        7000,
        15000);
console.log(city);