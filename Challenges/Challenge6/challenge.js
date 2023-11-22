function balancedBrackets(string) {
  const stack = [];
  const open = ['[', '{', '('];
  const close = ["]", "}", ")"];
  for (let char of string) {
    if (open.includes(char)) {
      stack.push(char);
    }
    else if (close.includes(char)) {
      const matchOpen = open[close.indexOf(char)];
      if (stack.length === 0 || stack.pop() !== matchOpen) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(balancedBrackets('(hello)[world]'))
// => true

console.log(balancedBrackets('([)]'))
// => false

console.log(balancedBrackets('[({}{}{})([])]'))
// => true

module.exports = balancedBrackets