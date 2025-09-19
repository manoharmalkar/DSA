function validAnagram(str1, str2){  
  str1 = str1.split("")
  str2 = str2.split("")
  
  if(str1.length !== str2.length){
      return false;
  }
  const strObj1 = {}
  const strObj2 = {}
  for(let i = 0; i < str2.length; i++){
      if(strObj1[str1[i]]){
          strObj1[str1[i]] = strObj1[str1[i]]++;
      } else {
          strObj1[str2[i]] = 1;
      }
      if(strObj2[str2[i]]){
          strObj2[str2[i]] = strObj1[str2[i]]++;
      } else {
          strObj2[str2[i]] = 1;
      }
  }
  const allKeys = Object.keys(strObj2);
  for(let i = 0; i < allKeys.length; i++){
      if(strObj2[allKeys[i]] !== strObj1[allKeys[i]]){
          return false;
      }
  }
  
  return true;
  
}

console.log(validAnagram("BOB"))