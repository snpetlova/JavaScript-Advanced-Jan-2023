function solve(arr, givenPoint) {

    let res = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % givenPoint === 0) {
            res.push(arr[i])
        }
    }

    return res;

}solve(['5',
'20',
'31',
'4',
'20'],
2)

solve(['1', '2', '3', '4', '5'], 6)