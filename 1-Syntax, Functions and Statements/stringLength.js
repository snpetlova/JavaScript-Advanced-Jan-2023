function stringLen(w1, w2, w3){
    let lengthW1 = w1.length;
    let lengthW2 = w2.length;
    let lengthW3 = w3.length;
    let totalLen = lengthW1 + lengthW2 + lengthW3;
    console.log(totalLen);
    let avg = Math.floor(totalLen / 3);
    console.log(avg);

}stringLen('chocolate', 'ice cream', 'cake')