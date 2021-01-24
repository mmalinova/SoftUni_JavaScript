function createSortedList() {
    let numbers = [];

    function add(number) {
        numbers.push(number);
        this.size++;
        numbers.sort((a ,b) => a - b);
    }

    function remove(index) {
        if (index >= 0 && index < numbers.length) {
            numbers.splice(index, 1);
            this.size--;
        }
    }

    function get(index) {
        if (index >= 0 && index < numbers.length) {
            return numbers[index];
        }
    }

    return {
        size: 0,
        add,
        remove,
        get,
    }
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
