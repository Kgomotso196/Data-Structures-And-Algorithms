module.exports = function (num) {
  let fibs = [1, 1];
  let count = 0;
  let sumFibs;
  while (num > count) {
    sumFibs = fibs[count] + fibs[count + 1];
    if (sumFibs <= num) {
      fibs.push(sumFibs);
    }
    count++;
  }
  return fibs.filter(n => n % 2 !== 0).reduce((a,b) => a + b);
}