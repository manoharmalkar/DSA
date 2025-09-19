/*
Bubble Sort is a simple sorting algorithm that repeatedly compares adjacent elements in a list and swaps them if 
they are in the wrong order. This process continues until the list becomes completely sorted.
*/


function bubbleSort(arr, callbackFn) {
    
    function defaultCompare(a, b){
        return a > b ? 1 : a === b ? 0 : -1
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            let comapare;
            if(arr[j + 1] === undefined){
                continue;
            }
            if (typeof callbackFn !== 'function') {
                comapare = defaultCompare(arr[j], arr[j + 1])
            } else {
                comapare = callbackFn(arr[j], arr[j + 1])
            }
            if (comapare > 0) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            } 
        }
    }
    return arr;
}


// var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
// function strComp(a, b) {
//   if (a < b) { return -1;}
//   else if (a > b) { return 1;}
//   return 0;
// }
// console.log(bubbleSort(kitties, strComp))


var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
console.log(bubbleSort(nums))

// var moarKittyData = [{
//   name: "LilBub",
//   age: 7
// }, {
//   name: "Garfield",
//   age: 40
// }, {
//   name: "Heathcliff",
//   age: 45
// }, {
//   name: "Blue",
//   age: 1
// }, {
//   name: "Grumpy",
//   age: 6
// }];
 
// function oldestToYoungest(a, b) {
//   return b.age - a.age;
// }
// console.log(bubbleSort(moarKittyData, oldestToYoungest))