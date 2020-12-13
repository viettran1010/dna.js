class MyArray {
    constructor() {
        this.size = 0;
        this.capacity = 10;
        this.arr = [];
    }

    append(item) {
        if (this.size === this.capacity) {
            this.arr = [...this.arr];
            this.capacity = this.size * 2;
            this.size++;
        }
        this.size++;
        this.arr.push(item);
    }

    isEmpty() {
        return this.size === 0;
    }

    size() {
        return this.size();
    }

    itemAt(index) {
        if (index < 0 || index >= this.size)
            return null;
        return this.arr[index];
    }

    insert(item, index) {
        if (index < 0 || index >= this.size)
            return null;

        if (this.size === this.capacity) {
            this.capacity = this.size * 2;
        }
        this.arr = [...this.arr, 0];

        this.size++;

        for (let i = this.arr.length-1; i >= index+1; i--) {
            this.arr[i] = this.arr[i-1];
        }
        this.arr[index] = item;
    }

    pop() {
        this.arr.pop();
        this.arr = [...this.arr];
        this.size --;
        if (this.size <= Math.floor(this.capacity/4)) {
            this.capacity = this.capacity / 2;
        }
    }

    removeAt(index) {
        if (index < 0 || index >= this.size)
            return null;

        for (let i = index+1; i < this.arr.length; i++) {
            this.arr[i-1] = this.arr[i];
        }
        this.arr.pop();

        if (this.size <= Math.floor(this.capacity/4)) {
            this.capacity = this.capacity / 2;
        }
    }
}

let arr = new MyArray();
arr.append(4);
arr.append(5);
arr.append(6);
arr.append(7);
console.log(arr)
console.log(arr.itemAt(22))

arr.insert(8,2)
console.log(arr)

arr.pop()
console.log(arr)

arr.removeAt(0);
console.log(arr)
