/*
Insertion Sort  : 
Algorithm Explanation
1) Start with the second element (index 1), assume the first element (index 0) is already sorted.
2) Pick the current element and compare it with the elements in the sorted portion (left side).
3) Shift all elements that are greater than the current element one position to the right.
4) Insert the current element into its correct position.
5) Repeat this process for all elements until the array is fully sorted.
*/


function insertionSort(arr, callbackFn) {
    
    function defaultCompare(a, b){
        return parseInt(a) > parseInt(b) ? 1 : a === b ? 0 : -1
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j >= 0; j--) {
            let comapare;
            if(!arr[j-1] || !arr[j]){
                continue;
            }
            if (typeof callbackFn !== 'function') {
                comapare = defaultCompare(arr[j-1], arr[j])
            } else {
                comapare = callbackFn(arr[j-1], arr[j])
            }
            if (comapare > 0) {
                const temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
            }
        }        
    }
    return arr;
}

// var nums = [4, 20, 12, 10, 7, 9];
// console.log(insertionSort(nums))

// var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
// function strComp(a, b) {
//   if (a < b) { return -1;}
//   else if (a > b) { return 1;}
//   return 0;
// }
// console.log(insertionSort(kitties, strComp))


// var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
// console.log(insertionSort(nums))

var moarKittyData = [{
  name: "LilBub",
  age: 7
}, {
  name: "Garfield",
  age: 40
}, {
  name: "Heathcliff",
  age: 45
}, {
  name: "Blue",
  age: 1
}, {
  name: "Grumpy",
  age: 6
}];
 
function oldestToYoungest(a, b) {
  return b.age - a.age;
}
console.log(insertionSort(moarKittyData, oldestToYoungest))