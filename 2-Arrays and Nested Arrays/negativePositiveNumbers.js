function solve(arr) {

    let res = [];

    for (elem of arr) {
        if (elem >= 0) {
            res.push(elem);
        } else {
            res.unshift(elem)
        }
    }

    console.log(res.join("\n"));

}solve([7, -2, 8, 9])