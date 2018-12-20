// link to python tutor: https://goo.gl/WUuWU5


const dataString = '99 2 80 50 89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5';
const dataArray = dataString.split(' ');

dataArray.forEach((string, index) => {
  dataArray[index] = parseInt(string)
})

let count = 0;
//start arr = [4,2,1]

                  //1,2,4    1          3
function quickSort(array, start=0, end=array.length){
  
  if(start >= end){
    return array;
  }
  const middle = partition(array, start, end);  //([1,2,4]   partition([1,2,4] 0, 2)
  array = quickSort(array, start, middle);  //([1,2,4]  start = 0  middle === 1
  array = quickSort(array, middle+1, end); //quicksort([1,2,4]  , 1, 3)
  return array;
}

function partition(array, start, end){ //([1,2,4] 0, 2) end = 2, array[1] = 2
  
  const pivot = array[end-1]; //pivot = 2
  let j = start;  // j =0
  for(let i=start; i < end-1; i++){  // i = 0, end-1 = 1
    if(array[i] <= pivot){ //1 <= 2
      swap(array, i, j); // 0, 0
      j++;
      count++ 
    }
  }

  swap(array, end-1, j); //end-1 === 1, j = 1
  return j; //return j == 1
}
//make temp variable, set temp to left, set left to right, set right to temp
function swap(array, left, right){ //4,2,1   2, 0
  const temp = array[left];  // temp = 1
  array[left] = array[right]; // array[left] = 4
  array[right] = temp; //1
  //array == 1,2,4
}
console.log(quickSort(dataArray));
console.log(count)