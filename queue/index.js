class MyQueue {
    constructor(size) {
        this.arr = new Array(size);
        this.head = -1;
        this.tail = -1;
        this.length = 0;
        this.size = size;
    }

    enqueue(val) {
        if (this.isFull())
            throw "queue full"
        if (this.head === -1) {
            this.head++;
            this.tail++;
        }
        else {
            this.tail++;
        }

        this.arr[this.tail % this.size] = val;
        this.length++;
    }

    isFull() {
        return this.tail - this.head === this.size - 1;
    }

    dequeue() {
        if (this.length === 0)
            throw "queue is empty"

        let res = this.arr[this.head % this.size];
        if (this.head === this.tail) {
            this.tail = -1;
            this.head = -1;
        }
        else this.head++;
        this.length--;
        return res;
    }

    isEmpty() {
        return (this.head === -1)
    }
}

let queue = new MyQueue(4);

// queue.dequeue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

console.log(queue)

console.log(queue.dequeue())
console.log(queue.dequeue())

queue.enqueue(1);
queue.enqueue(2);

console.log(queue)

console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
