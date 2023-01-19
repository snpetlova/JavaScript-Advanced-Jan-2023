function solve(...param) {

    let number = param[0];

    for (const command of param) {
        switch (command) {
            case 'chop':
                number /= 2;
                console.log(number);
                break;
            case 'dice':
                number = Math.sqrt(number);
                console.log(number);
                break;
            case 'spice':
                number += 1;
                console.log(number);
                break;
            case 'bake':
                number *= 3;
                console.log(number);
                break;
            case 'fillet':
                number = number - number * 0.2;
                console.log(number);
                break;
        }
    }

} solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')