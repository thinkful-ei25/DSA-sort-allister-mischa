const dataString = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5';
const dataArray = dataString.split(' ');

dataArray.forEach((string, index) => {
  dataArray[index] = parseInt(string);
});

/* 

bucketSort(arr[], n)
1) Create n empty buckets (Or lists).
2) Do following for every array element arr[i].
.......a) Insert arr[i] into bucket[n*array[i]]
3) Sort individual buckets using insertion sort.
4) Concatenate all sorted buckets.

*/

//min and max variables 
//find min and max
//bucket for each integer 
//how long the array is, min and max
//newArr = length of the array, set newArr[0] min newArr[length] = max
//filling this new arry, walking through old array, putting to the index
//if find a double --> 
//newArr[arr[i]] = arr[i]

//hash, binaryTree, linkedList, array

//newArray = max - min

//[5,2,8,3,4,5,73]
//max: 73, min: 2
//[2,3,4,[5,5],..8....73]

//[2,7,3,5,8]
//[2,3,-,5,-,7,8]
//new array.lgenth = arr.length
//arr[0]=min, arr[length] = max


let count = 0;
function bucketSort(arr, min, max){
  const orderedArr = [];
  const returnArr = [];
  orderedArr.length = max - min;
  for(let i = 0; i < arr.length; i++){
    if(orderedArr[[arr[i]] - min] === undefined){
      orderedArr[[arr[i]] - min] = 1;
    }else{
      orderedArr[[arr[i]]- min] ++;
    }
  }
  for(let i = 0; i <orderedArr.length; i++){
    let count2 = -1;
    count++;
    if(orderedArr[i] !== undefined){
      for(let j = 0; j < orderedArr[i]; j++){
        count2 ++;
        count += count2;
        returnArr.push(i+min);
      }
    }
  }
  
  return returnArr;
}
const arr = [99,98,88,89,90,90];
console.log(bucketSort(arr, 88, 99));
console.log(count);
console.log(dataArray.length);
// bucketSort(dataArray, 1, 98);