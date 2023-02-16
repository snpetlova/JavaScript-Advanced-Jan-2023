function solve(arr) {

    const cars = new Map;

    for (const line of arr) {
        let [carBrand, carModel, producedCars] = line.split(' | ');
        producedCars = Number(producedCars);

        if (!cars.has(carBrand)) {
            cars.set(carBrand, {});
        }

        if (!cars.get(carBrand).hasOwnProperty(carModel)) {
            cars.get(carBrand)[carModel] = producedCars;
        } else {
            cars.get(carBrand)[carModel] += producedCars;
        }
    }

    for (const car of cars) {
        console.log(car[0]);
        const models = car[1];
        
        for (const model of Object.keys(models)) {
            console.log(`###${model} -> ${models[model]}`);
        }
    }

} solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10'])