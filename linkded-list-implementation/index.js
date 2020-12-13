class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class MyLinkedList {
    constructor() {
        // this.curr = null;
        this.size = 0;
        this.first = null;
        this.last = null;
    }

    size() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0;
    }

    valueAt(index) {
        
    }

    pushFront(node) {
        node.next = this.first;
        this.first = node;
        this.size++;
    }

    popFront() {
        if (this.size === 0)
            return;
        this.first = this.first.next;
        this.size--;
    }

    pushBack(node) {
        if (this.size === 0) {
            this.first = node;
            this.last = node;
        }
        else {
            this.last.next = node;
            this.last = node;
        }
        this.size++;
    }

    popBack() {
        this.last = null;
        if (this.size === 0)
            return;
        else if (this.size === 1) {
            this.first = null;
            this.last = null;
            this.size = 0;
            return;
        }
        let curr = this.first;
        for (let i = 0; i < this.size - 2; i++) {
            curr = curr.next;
        }
        curr.next = null;
        this.last = curr;
        this.size--;
    }

    front() {
        return this.first;
    }

    back() {
        return this.last;
    }

    insert(value, index) {
        if (index < 0 || index >= this.size)
            return;

        if (index === 0) {
            this.pushFront(new Node(value))
        }
        else {
            let node = this.first;
            for (let i = 0; i < index - 1; i++) {
                node = node.next;
            }

            let next = node.next;

            node.next = new Node(value);
            node.next.next = next;
            this.size++;
        }
    }

    removeAt(index) {
        if (index < 0 || index >= this.size)
            return;
        if (index === 0)
            this.popFront();
        else {

        }
    }
}

let linkedList = new MyLinkedList();


linkedList.pushBack(new Node(4))
linkedList.pushBack(new Node(5))
linkedList.pushBack(new Node(6))

linkedList.pushFront(new Node(3))
linkedList.pushFront(new Node(2))
linkedList.pushFront(new Node(1))

console.log(JSON.stringify(linkedList))

linkedList.popFront();
// linkedList.popBack();

console.log(JSON.stringify(linkedList))


linkedList.insert(2.5, 1)

linkedList.insert(0.5, 0)

console.log(JSON.stringify(linkedList))
linkedList.popBack()

console.log(JSON.stringify(linkedList))
