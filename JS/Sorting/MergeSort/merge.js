function merge(arr1,arr2, sortFunction){
    let i = 0;
    let j = 0;
    const newArr = [];
    while(i < arr1.length && j < arr2.length){
        let takeFirst = true;
        if(typeof sortFunction === "function"){
            takeFirst = sortFunction(arr1[i], arr2[j])
        } else {
            takeFirst = arr1[i] - arr2[j]
        }
        if(takeFirst < 1){
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
/////////////////////////////////////////////////////////////////////

// var arr1 = [1,3,4,5];
// var arr2 = [2,4,6,8];
// console.log(merge(arr1,arr2)) // [1,2,3,4,4,5,6,8]

/////////////////////////////////////////////////////////////////////

// var arr3 = [-2,-1,0,4,5,6];
// var arr4 = [-3,-2,-1,2,3,5,7,8];
// console.log(merge(arr3,arr4));

/////////////////////////////////////////////////////////////////////

// var arr5 = [3,4,5]
// var arr6 = [1,2]
// console.log(merge(arr5,arr6)) // [1,2,3,4,5]

/////////////////////////////////////////////////////////////////////

// var names = ["Bob", "Ethel", "Christine"]
// var otherNames = ["M", "Colt", "Allison", "SuperLongNameOMG"]
 
// function stringLengthComparator(str1, str2) {
//   return str1.length - str2.length;
// }
 
// console.log(merge(names, otherNames, stringLengthComparator)); // ["M", "Bob", "Colt", "Ethel", "Allison", "Christine", "SuperLongNameOMG"]

/////////////////////////////////////////////////////////////////////