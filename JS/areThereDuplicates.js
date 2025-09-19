function areThereDuplicates(...agrs) {
  
  const mapper = {}
  // this is for log of n
  for (let i of agrs){
      if(mapper[i]){
          return true;
      } else{
          mapper[i] = 1;
      }
  }
  return false;
}

areThereDuplicates(1, 2, 2)