function cityRecord(name, population, treasury) {

    city = {
        name,
        population: Number(population),
        treasury: Number(treasury),
    }

    return city;

} cityRecord('Tortuga',
7000,
15000)