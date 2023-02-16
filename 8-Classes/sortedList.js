class List{
    constructor() {
        this.array = [];
        this.size = this.array.length;
    }

    add(el) {
        this.array.push(el);
        this.array = this.array.sort((a,b) => a - b);
        this.size = this.array.length;
    }

    remove(index) {
        if (index < this.array.length && index >= 0) {
            this.array.splice(index, 1);
            this.array = this.array.sort((a,b) => a - b);
            this.size = this.array.length;
        } else {
            throw new Error ('Invalid Index!')
        }
    }

    get(index) {
        if (index < this.array.length && index >= 0) {
            return this.array[index];
        } else {
            throw new Error ('Invalid index!')
        }
    }

    size() {
        return this.array.length;
    }
}



let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1); 
console.log(list.get(1));