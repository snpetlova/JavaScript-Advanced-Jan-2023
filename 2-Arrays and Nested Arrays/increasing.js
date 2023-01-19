function solve(arr) {

    let biggest = arr.shift();
    const final = [biggest];

    for (const num of arr) {
        if (num >= biggest) {
            biggest = num;
            final.push(biggest);
        }
    }

    return final;
    
}solve([1, 3, 8, 4, 10, 12, 3, 2, 24])