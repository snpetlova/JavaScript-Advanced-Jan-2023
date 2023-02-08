function solve(arr, start, end) {

    if(Array.isArray(arr) == false) {
        return NaN;
    }

    if(start < 0) {
        start = 0;
    }

    if (end > arr.length - 1) {
        end = arr.length -1;
    }

    return arr
    .slice(start, end + 1)
    .map(Number)
    .reduce((acc, x) => acc + x, 0)

} solve([10, 20, 30, 40, 50, 60], 3, 300)