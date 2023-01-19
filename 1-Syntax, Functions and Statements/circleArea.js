function circleArea(input) {

    let res;
    let inputType = typeof (input);
    
    if (inputType === 'number') {
        res = Math.pow(input, 2) * Math.PI;
        console.log(res.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    }

}circleArea(5)
circleArea('name')