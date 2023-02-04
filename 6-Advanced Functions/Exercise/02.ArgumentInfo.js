function solve() {

    const arg = Array.from(arguments);
    const counter = new Map();

    arg.forEach((e) => {
        const type = typeof e;
        console.log(`${type}: ${e}`);

        if(!counter.has(type)) {
            counter.set(type, 0);
        }
        counter.set(type, counter.get(type) + 1)
    });

    Array.from(counter.entries()).sort((a,b) => b[1] - a[1]).forEach((e) => 
    console.log(`${e[0]} = ${e[1]}`));

}solve('cat', 42, function () { console.log('Hello world!'); })