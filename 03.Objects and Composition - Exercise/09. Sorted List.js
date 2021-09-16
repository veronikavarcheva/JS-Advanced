function createSortedList() {

    let obj = {
        items: [],
        add: function (element) {
            this.items.push(element);
            sortList(this.items);
        },
        remove: function (index) {
            if (index >= 0 && index < this.items.length) {
                this.items.splice(index, 1);
            }
        },
        get: function (index) {
            if (index >= 0 && index < this.items.length) {
                return this.items[index];
            }
        },
        get size() {
            return this.items.length;
        },
        printList: function () {
            console.log(this.items.join(', '));
        }

    };

    function sortList(arr) {
        arr.sort((a, b) => a - b);
    }

    return obj;
}


let list = new List();
console.log(list);
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
