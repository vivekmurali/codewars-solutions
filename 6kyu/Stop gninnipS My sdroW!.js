function spinWords(str) {
  //TODO Have fun :)
  let arr = str.split(" ");
  let newArr = arr.map((word) => {
    return word.length > 4 ? word.split("").reverse().join("") : word;
  });
  return newArr.join(" ");
}
