function solve(arr) {
    const juiceLeft = {};
    const bottles = {};

    arr.forEach(line => {
        const [juiceName, juiceQuantity] = line.split(' => ');

        if (juiceLeft.hasOwnProperty(juiceName) == false) {
            juiceLeft[juiceName] = 0;
        }
        juiceLeft[juiceName] += Number(juiceQuantity)


        if (juiceLeft[juiceName] >= 1000) {
            let bottle = Math.floor(juiceLeft[juiceName] / 1000);
            juiceLeft[juiceName] -= bottle * 1000;


            if (bottles.hasOwnProperty(juiceName) == false) {
                bottles[juiceName] = 0;
            }
            bottles[juiceName] += bottle;
        }
    });

    for (let [juice, bottlesOfJuice] of Object.entries(bottles)) {
        console.log(`${juice} => ${bottlesOfJuice}`);
    }
} solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'])