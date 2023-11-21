function sum(number) {
  if (number <= 0) {
    return 0;
  } else {
    return number + sum(number - 1);
  }
}

console.log(sum(4))
console.log(sum(10))

exports.sum = sum;
