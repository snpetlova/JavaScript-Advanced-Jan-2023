function solve(arr) {

    let counter = 1;
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "add") {
            res.push(counter++);
        } else if (arr[i] === "remove") {
            res.pop(counter++);
        }
    }

    if (!res.length) {
        console.log('Empty');
    } else {
        console.log(res.join('\n'));
    }

}solve(['add',
'add',
'add',
'add'])