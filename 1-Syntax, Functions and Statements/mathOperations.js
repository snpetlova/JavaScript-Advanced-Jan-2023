function mathOp(n1, n2, operator) {

    let res;

    switch (operator) {
        case '+':
            res = n1 + n2;
            break;
        case '-':
            res = n1 - n2;
            break;
        case '*':
            res = n1 * n2;
            break;
        case '/':
            res = n1 / n2;
            break;
        case '%':
            res = n1 % n2;
            break;
        case '**':
            res = n1 ** n2;
            break;
    }

    console.log(res);

} mathOp(3, 5.5, '*')