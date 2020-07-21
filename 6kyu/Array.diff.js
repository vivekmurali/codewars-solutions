function arrayDiff(a, b) {
  b.forEach(e =>{
    var i = 0;
    while (i < a.length) {
        if(a[i] === e) {
            a.splice(i, 1);
        } else {
            ++i;
        }
    }
  });
  return a;
}