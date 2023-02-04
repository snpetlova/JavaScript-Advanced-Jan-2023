function solve() {
    const library = {
        apple: {carbohydrate: 1, flavour: 2},
        lemonade: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        eggs: {protein: 5, fat: 1, flavour: 1},
        turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
    }

    const elements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }

    function manager(string) {
        let [command, action, quantity] = string.split(' ');
        quantity = Number(quantity);

        if (command === 'prepare') {
            let recipe = library[action];

            for (const currElement in recipe) {
                if (recipe[currElement] * quantity > elements[currElement]) {
                    return `Error: not enough ${currElement} in stock`
                }
            }
            for (const currElement in recipe) {
                elements[currElement] -= recipe[currElement] * quantity;
            }
            return 'Success';
        } else if (command === 'restock') {
            elements[action] += quantity;
            return 'Success';
        } else if (command === 'report') {
            const res = [];
            for (const currElement in elements) {
                res.push(`${currElement}=${elements[currElement]}`);
            }
            return res.join(' ');
        }
    }
    return manager;
}

let manager = solve ();
console.log (manager ("restock flavour 50")); // Success
console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock