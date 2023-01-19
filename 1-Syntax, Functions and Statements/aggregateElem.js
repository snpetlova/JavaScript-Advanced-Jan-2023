function solve (arr) {
    let nums = arr.map(Number);

    let res1 = nums.reduce((a, b) => a + b);
    let res2 = 0;
    for (let i = 0; i < nums.length; i++) {
        res2 += 1 / nums[i];
    }
    let res3 = nums.join('');

    console.log(res1);
    console.log(res2);
    console.log(res3);
} solve([1, 2, 3])