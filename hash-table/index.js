class Node {
    constructor(key, value) {
        this.value = value
        this.key = key
        this.next = null
    }
}

class HashTable {
    constructor() {
        this.capacity = 8
        this.array = new Array(this.capacity);
    }

    put(key, value) {
        if (!this.array[key%this.capacity])
            this.array[key%this.capacity] = new Node(key, value);
        else {
            let curr = this.array[key%this.capacity];
            while (true) {
                if (curr.key === key) { // if key exists, update
                    curr.value = value
                    break
                }
                else if (curr.next === null) { // otherwise, create new node
                    curr.next = new Node(key, value);
                    this.capacity++;
                    break
                }
                else {
                    curr = curr.next
                }
            }
        }
    }

    get(key) {
        if (this.array[key%this.capacity]) {
            let curr = this.array[key%this.capacity];
            while (curr) {
                if (curr.key === key) { // if key exists, update
                    return curr.value
                }
                else
                    curr = curr.next
            }
        }
        else {
            return undefined
        }
        return undefined
    }

    remove(key) {
        if (this.array[key%this.capacity]) {
            let curr = this.array[key%this.capacity];
            let prev = null;
            while (curr) {
                if (curr.key === key) {
                    if (prev)  {
                        prev.next = curr.next
                    }
                    else {
                        this.array[key%this.capacity] = curr.next
                    }
                    break
                }
                else {
                    prev = curr
                    curr = curr.next
                }
            }
        }
    }
}


let hashTable = new HashTable()

hashTable.put(1,"aaa")

hashTable.put(9,"ccc")

hashTable.put(6,"ddd")

hashTable.get(1)

hashTable.put(2,'bbb')
console.log(JSON.stringify(hashTable))

hashTable.remove(1)

console.log(JSON.stringify(hashTable))

console.log(hashTable.get(1))

hashTable.put(17, 'eee')

console.log(JSON.stringify(hashTable))

console.log(hashTable.get(9))
