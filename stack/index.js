class MyStack {
    constructor(){
        this.arr = [];
    }

    push(val) {
        return this.arr.push(val)
    }

    pop(val) {
        if (this.arr.length === 0)
            throw "index out of range"
        return this.arr.pop(val);
    }

    top() {
        return this.arr[this.arr.length-1];
    }
}

let stack = new MyStack();

// stack.pop();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log(stack.top());

stack.pop();

console.log(stack.top());

stack.pop();

console.log(stack.top());
