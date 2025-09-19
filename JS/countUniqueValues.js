function countUniqueValues(arr){
    if(!arr.length){
        return 0;
    }
    let i = 0;
    for(let j = 1; j<arr.length; j++){
        if(arr[j] !== arr[i]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}

console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));