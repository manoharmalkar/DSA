function linearSearch(arr, val){
  // add whatever parameters you deem necessary - good luck!
  
  for(let i in arr){
      if(arr[i] === val){
          return i; 
      }
  }
  return -1;
}

console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)) // 1