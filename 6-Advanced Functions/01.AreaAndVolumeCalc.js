function solve(areaF, volF, inputJSON) {

    const inputs = JSON.parse(inputJSON);
    const res = [];

    for (let input of inputs) {
        const area = areaF.call(input);
        const volume = volF.call(input);

        const curr = {
            area,
            volume
        };

        res.push(curr)
    }
    return res;
}

function areaF() {
    return Math.abs(this.x * this.y);
}

function volF() {
    return Math.abs(this.x * this.y * this.z);
}

