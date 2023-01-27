function heroicInventory(input) {

    let res = [];

    for (const line of input) {
        let [name, level, items] = line.split(' / ');
        level = Number(level);

        if (items) {
            items = items.split(', ');
        } else {
            items = []
        }

        res.push({name, level, items})
    }

    console.log(JSON.stringify(res));

}heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'])