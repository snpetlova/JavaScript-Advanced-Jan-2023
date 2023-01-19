function solve(arr) {

    let final = [];
    let biggest = arr[0];
    final = arr.reduce((acc, currElem) => {
        if (biggest <= currElem) {
            acc.push(currElem);
            biggest = currElem;
        }
        return acc;
    }, []);

    return final;

}solve([1, 3, 8, 4, 10, 12, 3, 2, 24])