function divisors(n) {
  let arr = [];
  for (let i = 2; i <= n / 2; i++) {
    if (n % i == 0) {
      arr.push(i);
    }
  }
  if (arr.length === 0) return `${n} is prime`;
  return arr;
}
