function comp(array1, array2) {
  //your code here
  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);
  return array2.every((e, i) => e === array1[i] * array1[i]);
}
