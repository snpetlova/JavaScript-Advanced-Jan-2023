function solve(n, k) {

    let res = [1];
    for (let i = 1; i < n; i++) {
        let start = Math.max(0, i-k);
        let currElem = res
        .slice(start, start + k)
        .reduce((a,b) => a+b, 0);
        res.push(currElem)
    }
    
    return res;
}solve(6, 3)