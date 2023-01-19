function solve(fruit, weightG, pricePerKG){

    let weightKG = weightG / 1000;
    let totalSum = weightKG * pricePerKG;

    console.log(`I need $${totalSum.toFixed(2)} to buy ${weightKG.toFixed(2)} kilograms ${fruit}.`);

}solve('orange', 2500, 1.80)