function findUniq(arr) {
  // do magic
  arr.sort();
  if(arr[0] === arr[1])
    return arr[arr.length-1];
  return arr[0];
}
