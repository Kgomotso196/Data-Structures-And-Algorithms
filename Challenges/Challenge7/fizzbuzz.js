module.exports = function () {
  let results = [];
  for (let k = 1; k <= 100; k++){
    if (k % 5 === 0 && k % 3 === 0){
      console.log("FizzBuzz");
      results.push("FizzBuzz");
    }
    else if (k % 3 === 0) {
      console.log("Fizz");
      results.push("Fizz");
    }
    else if (k % 5 === 0) {
      console.log("Buzz");
      results.push("Buzz");
    }
    else {
      console.log(k);
      results.push(k);
    }
  }
  return results;
}