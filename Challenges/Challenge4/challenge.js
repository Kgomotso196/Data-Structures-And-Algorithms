class Stack {
  constructor () {
    this.items = []
  }
  push(number) {
    return this.items.push(number)
  }

  pop() {
    return this.items.pop()
  }
}

const stack = new Stack()
stack.push(3)
stack.push(5)
console.log(stack.pop())// => 5, Removes and returns the topmost element from the stack. In this case, it will return 5, and it is logged to the console.

stack.push(2)
stack.push(7)
console.log(stack.pop())// => 7
console.log(stack.pop())// => 2
console.log(stack.pop())// => 3

module.exports = Stack
