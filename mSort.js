const dataString = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5';
const dataArray = dataString.split(' ');

dataArray.forEach((string, index) => {
    dataArray[index] = parseInt(string)
})

let count = 0;

// arr = [4, 2, 1]
function mergeSort(arr) {
   count++
    if (arr.length <= 1) {
        
        return arr;
    }

    const middle = Math.floor(arr.length / 2); // 1
    
    let left = arr.slice(0, middle); // [4]
    
    let right = arr.slice(middle, arr.length); //[2, 1]
    
    left = mergeSort(left); // mergeSort([4])  ---> [4]
    
    right = mergeSort(right); // mergeSort([2, 1]) ---> mergeSort([2]), mergeSort([1]) ---> [1, 2]
    
    return merge(left, right, arr)
}

function merge(left, right, arr) {
    count++
    let leftIndex = 0;
    
    let rightIndex = 0;
    
    let outputIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        count++
        if (left[leftIndex] < right[rightIndex]) { //left[0] = 4  < right[1] = 2 = false
            
            arr[outputIndex++] = left[leftIndex++];
        }
        else {
            
            arr[outputIndex++] = right[rightIndex++] // arr[1] = right[1] = 2 ... arr = [1, 2, 1]
        }
    }
    for (let i = leftIndex; i < left.length; i++) {
        count++
        arr[outputIndex++] = left[i]; //arr[2] = left[0] = 4 ... arr = [1, 2, 4]
    }
    for (let i = rightIndex; i < right.length; i++) {
        count++
        arr[outputIndex++] = right[i]
    }
    return arr // [1, 2, 4]
}

console.log(dataArray.length)
console.log(mergeSort(dataArray))
console.log(count);

