function solve(arr) {

    let res = [];

    for (let i = 0; i < arr.length; i++) {
        let currArr = arr[i];
        for (let k = 0; k < currArr.length; k++) {
            res.push(currArr[k])
        }
    }

    let biggest = Math.max(...res);
    return biggest;

}solve([[20, 50, 10],
    [8, 33, 145]])