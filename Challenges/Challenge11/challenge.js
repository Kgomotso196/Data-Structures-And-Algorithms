const sqrt = (number) => {
  return sqrt_recursive(number, 0, number)
}

const sqrt_recursive = (number, min_interval, max_interval) => {
  let middleNumber = Math.floor((min_interval + max_interval) / 2);

  if (middleNumber * middleNumber === number) {
    return middleNumber;
  }

  if (middleNumber * middleNumber < number) {
    return sqrt_recursive(number, middleNumber + 1, max_interval)
  }
  return sqrt_recursive(number, min_interval, middleNumber - 1)
}

module.exports = sqrt;
console.log(sqrt(25))
console.log(sqrt(7056))