function sumOfNum(n, m) {

    let n1 = Number(n);
    let n2 = Number(m);
    let res = 0;

    for (let i = n1; i <= n2; i++){
        res +=i;
    }
    
    return res;

}console.log(sumOfNum('1', '5')); 