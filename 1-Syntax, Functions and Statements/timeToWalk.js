function solve(steps, lengthMeters, kmPerH) {

    let distInM = steps * lengthMeters;
    let speedMPerS = kmPerH / 3.6;
    let rest = Math.floor(distInM / 500) * 60;
    let time = distInM / speedMPerS + rest;

    let h = Math.floor(time / 3600);
    let m = Math.floor(time / 60);
    let s = Math.round(time % 60);

    console.log(`${h < 10 ? "0" : ""}${h}:${m < 10 ? "0" : ""}${m}:${s < 10 ? "0" : ""}${s}`);

} solve(4000, 0.60, 5)