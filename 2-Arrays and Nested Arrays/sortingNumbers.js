function sortingNumbers(arr) {

    arr.sort((a,b) => a-b);
    let res = [];
    
    while (arr.length !== 0) {
        res.push(arr.shift());
        res.push(arr.pop());
    }

    return res;

}sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])