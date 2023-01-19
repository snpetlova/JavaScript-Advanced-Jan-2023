function solve(input) {
    let numString = input.toString();
    let sum = 0;
    let isTheSame = true;
    let first = numString[0];

    for(let i = 0; i < numString.length; i++) {
        if (first !== numString[i]) {
            isTheSame = false;
        }
        sum += Number(numString[i])
    }

    console.log(isTheSame);
    console.log(sum);

}solve(2222222)