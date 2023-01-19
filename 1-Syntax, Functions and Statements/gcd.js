function solve (a,b) {

    let x = Math.abs(a);
    let y = Math.abs(b);

    while(y) {
        let t = y;
        y = x % y;
        x = t;
    }
    return x;

}console.log(solve(15, 5)); 