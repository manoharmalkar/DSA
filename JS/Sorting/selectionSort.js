/*
Selection Sort is one of the simplest sorting algorithms. 
It works by repeatedly finding the smallest (or largest) element 
from the unsorted portion of the list and moving it to the correct position in the sorted portion.

1) Start with the first element.
2) Find the smallest element in the array.
3) Swap it with the first element.
4) Move to the next position and repeat for the rest of the array (ignoring already sorted part).
5) Continue until the array is fully sorted.

*/


function selectionSort(arr, callbackFn) {
    
    function defaultCompare(a, b){
        return parseInt(a) > parseInt(b) ? 1 : a === b ? 0 : -1
    }

    for (let i = 0; i < arr.length; i++) {
        let smallest  = i;
        for (let j = i + 1; j < arr.length; j++) {
            let comapare;
            if (typeof callbackFn !== 'function') {
                comapare = defaultCompare(arr[smallest], arr[j])
            } else {
                comapare = callbackFn(arr[smallest], arr[j])
            }
            if (comapare > 0) {
                smallest = j;
            } 
        }
        
        if(smallest !== i) {
            const temp = arr[smallest];
            arr[smallest] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}

// var nums = [4, 20, 12, 10, 7, 9];
// console.log(selectionSort(nums))

// var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
// function strComp(a, b) {
//   if (a < b) { return -1;}
//   else if (a > b) { return 1;}
//   return 0;
// }
// console.log(selectionSort(kitties, strComp))


// var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
// console.log(selectionSort(nums))

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
console.log(selectionSort(moarKittyData, oldestToYoungest))