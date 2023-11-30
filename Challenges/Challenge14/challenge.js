function leftmostNodesSum(array) {
  let sum = 0;
  let level = 0;
  let i = 0;

  while (i < array.length) {
    sum += array[i];
    i = 2 * i + 1;
    level++;
  }

  return sum;
}

console.log(leftmostNodesSum([2, 7, 5, 2, 6, 0, 9]))
// => 11

module.exports = leftmostNodesSum