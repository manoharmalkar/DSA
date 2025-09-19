// productOfArray([1,2,3]) // 6

function productOfArray(arr){
    if(arr.length <= 0){
        return 1;
    }
    return arr[0] * productOfArray(arr.splice(1, arr.length - 1))
}

console.log(productOfArray([1,2,3,10]));