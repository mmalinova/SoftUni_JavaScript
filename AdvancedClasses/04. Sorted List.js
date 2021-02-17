class List {
    constructor() {
        this.list = [];
        this.size = 0;
    }
    add(elemenent) {
        this.list.push(elemenent);
        this.size++;
        this.list.sort((a, b) => a - b);
    }
    remove(index) {
        if (!this.validateIndex(index)) {
            return;
        }
        this.list.splice(index, 1);
        this.size--;
        this.list.sort((a, b) => a - b);
    }
    get(index) {
        if (!this.validateIndex(index)) {
            return;
        }
        return this.list[index];
    }
    validateIndex(index) {
        return index >= 0 && index < this.size;
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
