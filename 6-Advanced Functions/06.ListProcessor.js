function solve(arr) {

    let res = [];

    const object = {
        add,
        remove,
        print
    }

    arr.forEach(e => {
        let [command, string] = e.split(' ');
        return object[command](string);
    })

    function add(string) {
        res.push(string);
    }

    function remove(string) {
        res = res.filter(x => (x !== string));
    }

    function print() {
        console.log(res.join(','));
    }

} solve(['add hello', 'add again', 'remove hello', 'add again', 'print'])