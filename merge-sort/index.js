const merge = (arr,l,m,r)=> {
    // arr[]
    console.log("merge: ",l,r )
    let left = [];
    let right = [];
    for (let i = l; i <= m; i++) {
        left.push(arr[i]);
    }
    for (let i = m+1; i <= r; i++) {
        right.push(arr[i]);
    }
    // console.log(left,right)
    let pointer = l;
    let leftPointer = 0;
    let rightPointer = 0;
    while (leftPointer < left.length || rightPointer < right.length) {
        if (rightPointer >= right.length) {
            arr[pointer] = left[leftPointer]
            leftPointer++;
        }
        else if (leftPointer >= left.length) {
            arr[pointer] = right[rightPointer]
            rightPointer++;
        }
        else if (left[leftPointer] > right[rightPointer]) {
            arr[pointer] = right[rightPointer];
            rightPointer++;
        }
        else if (left[leftPointer] <= right[rightPointer]) {
            arr[pointer] = left[leftPointer];
            leftPointer++;
        }
        // console.log(leftPointer,rightPointer)
        
        pointer++;
    }
    console.log(arr)
}

const mergeSort = (arr,l,r)=> {
    if (r>l) {
        let m = Math.ceil((l+r-1)/2)
        mergeSort(arr,l,m);
        mergeSort(arr,m+1,r);
        merge(arr,l,m,r);
    }
}

const arr = [38,27,43,3,9,82,10]
// const arr = [38,27,43,3]
mergeSort(arr,0,arr.length-1)
