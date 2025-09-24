function pivot(arr, start = 0, end = arr.length - 1){
    function swap(array, i, j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    
    let pivot = arr[start];
    let swapIdx = start;

    for (i = start + 1; i < arr.length; i++){
        if(pivot > arr[i]){
            swapIdx++;
            swap(arr,swapIdx,i);
        }
    }

    swap(arr,start,swapIdx);
    return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length -1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right) //3
        //left
        quickSort(arr,left,pivotIndex-1);
        //right
        quickSort(arr,pivotIndex+1,right);
      }
     return arr;
} 

var arr0 = [100,-3,2,4,6,9,1,2,5,3,23];
var arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
var arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];
var arr3 = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
 
function strLength(a, b) {
  return a.length - b.length
}
 
console.log(quickSort(arr0)); // 3
// pivot(arr2); // 4
// pivot(arr3, strLength); // 1