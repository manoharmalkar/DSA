/*
UPDATED : 23/09/2025
Merge Sort is a divide-and-conquer algorithm.
It splits the array into halves, sorts each half, and then merges the sorted halves back together.

Divide
    If the array has 1 or 0 elements, it’s already sorted — return it.
    Otherwise, find the middle index and split the array into two halves.

Conquer (Sort Each Half)
    Recursively apply Merge Sort to both halves until you have single-element arrays.

Combine (Merge)
    Compare elements from both halves and build a sorted array. 

*/

function merge(arr1,arr2, sortFunction){
    let i = 0;
    let j = 0;
    const newArr = [];
    while(i < arr1.length && j < arr2.length){
        let sort;
        if(typeof sortFunction === "function"){
            sort = sortFunction(arr1[i], arr2[j])
        } else {
            sort = arr1[i] - arr2[j]
        }
        if(sort < 1){
            newArr.push(arr1[i]);
            i++;
        } else {
            newArr.push(arr2[j]);
            j++;
        }
    }
    while(i<arr1.length){
        newArr.push(arr1[i]);
        i++;
    }
    while(j<arr2.length){
        newArr.push(arr2[j]);
        j++;
    }
    return newArr;
}

function mergeSort(arr, sortFunction){
    if(arr.length <= 1){
        return arr;
    }
    const mid = Math.floor(arr.length/2);
    const left = mergeSort(arr.slice(0, mid), sortFunction); 
    const right = mergeSort(arr.slice(mid), sortFunction);
    return merge(left, right, sortFunction);
}

//console.log(mergeSort([10,24,76,73]));
//console.log(mergeSort([4, 20, 12, 10, 7, 9]));
//console.log(mergeSort([0, -10, 7, 4]));
//console.log(mergeSort([1, 2, 3]));
//console.log(mergeSort([]));
// //================================================================
// var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
// console.log(mergeSort(nums)); 

//================================================================

// var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
 
// function strComp(a, b) {
//     if (a < b) { return -1;}
//     else if (a > b) { return 1;}
//     return 0;
// }
 
// console.log(mergeSort(kitties, strComp));

//================================================================

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
 
console.log(mergeSort(moarKittyData, oldestToYoungest)); // sorted by age in descending order