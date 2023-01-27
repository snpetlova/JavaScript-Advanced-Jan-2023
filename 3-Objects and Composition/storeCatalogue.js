function storeCatalogue(input) {

    let catalogue = {};

    for (let line of input) {
        let [productName, productPrice] = line.split(' : ');
        let firstLetter = productName[0];

        if (!catalogue.hasOwnProperty(firstLetter)) {
            catalogue[firstLetter] = {};
        }
        catalogue[firstLetter][productName] = productPrice;
    }

    let sorted = Object.keys(catalogue).sort((a,b) => a.localeCompare(b));

    for (let key of sorted) {
        console.log(key);
        
        let sortedProducts = Object.keys(catalogue[key]).sort((a,b) => a.localeCompare(b));

        for (const prod of sortedProducts) {
            console.log(`  ${prod}: ${catalogue[key][prod]}`);
        }
    }

}storeCatalogue(['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10'])