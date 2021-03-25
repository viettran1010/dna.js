class MaxHeap {
    constructor() {
        this.arr = [];
    }

    insert(value) {
        this.arr.push(value);
        let currPos = this.arr.length -1;
        while (currPos > 0) {
            let parentPos = Math.floor(currPos/2);
            if (this.arr[parentPos] < this.arr[currPos]) { // if parent value is less than current, switch
                [this.arr[parentPos], this.arr[currPos]] = [this.arr[currPos], this.arr[parentPos]];
                currPos = parentPos;
            }
            else break;
        }
    }

    removeMax() {
        if (!this.arr.length)
            throw new Error('Array empty')
        
        const max = this.arr[0]
        let temp = this.arr[0];
        this.arr[0] = this.arr[this.arr.length-1];
        this.arr[this.arr.length-1] = temp;

        this.arr.pop();

        let currPos = 0;
        while ((this.arr[currPos*2] && this.arr[currPos] < this.arr[currPos*2]) 
            || (this.arr[currPos*2+1] && this.arr[currPos] < this.arr[currPos*2+1])) {
                if (!this.arr[currPos*2]) {
                    [this.arr[currPos],this.arr[currPos*2+1]] = [this.arr[currPos*2+1],this.arr[currPos]]
                    currPos = currPos*2+1
                }
                else if (!this.arr[currPos*2+1]) {
                    [this.arr[currPos],this.arr[currPos*2]] = [this.arr[currPos*2],this.arr[currPos]]
                    currPos = currPos*2
                }
                else {
                    if (this.arr[currPos*2] < this.arr[currPos*2+1] ) {
                        [this.arr[currPos],this.arr[currPos*2+1]] = [this.arr[currPos*2+1],this.arr[currPos]]
                        currPos = currPos*2+1
                    }
                    else {
                        [this.arr[currPos],this.arr[currPos*2]] = [this.arr[currPos*2],this.arr[currPos]]
                        currPos = currPos*2
                    }
                }                            
        }
        return max;
    }
}

let heap = new MaxHeap();

heap.insert(35)
heap.insert(33)
heap.insert(42)
heap.insert(10)
heap.insert(14)
heap.insert(19)
heap.insert(27)
heap.insert(44)
heap.insert(26)
heap.insert(31)

console.log(heap)

heap.removeMax();
heap.removeMax();
heap.removeMax();
heap.removeMax();

console.log(heap)
