function solve(a) {

    let num1 = Number(a);

    return function (b) {
        let num2 = Number(b);
        return num1 + num2;
    }
}

let add5 = solve(5);
console.log(add5(2));
console.log(add5(3));

