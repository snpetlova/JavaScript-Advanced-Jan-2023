function solve(num) {
    let sum = num;

    function calculate(secondNum) {
        sum += secondNum;
        return calculate;
    }

    calculate.toString = function() {
        return sum;
    }

    return calculate;
}