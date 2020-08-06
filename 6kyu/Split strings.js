function solution(str) {
  let arr = str.split("");
  let pair = [];
  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i + 1] == null) {
      pair.push(arr[i] + "_");
    } else {
      pair.push(arr[i] + arr[i + 1]);
    }
  }
  return pair;
}
