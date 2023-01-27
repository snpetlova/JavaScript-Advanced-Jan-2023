function townPopulation(arr) {

    let towns = {};

    for (let town of arr) {
        let [name, population] = town.split(' <-> ');
        population = Number(population);

        if (towns[name] != undefined) {
            population += towns[name];
        }

        towns[name] = population;
    }

    for (let currTown in towns) {
        console.log(`${currTown} : ${towns[currTown]}`);
    }

}//townPopulation(['Sofia <-> 1200000',
//'Montana <-> 20000',
//'New York <-> 10000000',
//'Washington <-> 2345000',
//'Las Vegas <-> 1000000'])

townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000'])