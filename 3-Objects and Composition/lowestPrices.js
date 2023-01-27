function lowestPrices(input) {
    let object = {};

    for (let line of input) {
        let [townName, product, price] = line.split(' | ');

        if (!object[product]) object[product] = {};
        object[product][townName] = Number(price);
    }

    let finalRes = [];

    for (const key in object) {
        let sorted = Object.entries(object[key]).sort((a, b) => a[1] - b[1]);
        let [townName, price] = sorted[0];
        finalRes.push(`${key} -> ${price} (${townName})`)
    }

    return finalRes.join('\n')

} lowestPrices(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10'])