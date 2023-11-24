class Stack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(number) {
    this.stack.push(number);
    if (this.minStack.length === 0 || number <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(number);
    }
  }

  pop() {
    const popped = this.stack.pop();
    if (popped === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
    return popped;
  }

  min() {
    return this.minStack[this.minStack.length - 1];
  }
}

const stack = new Stack()
stack.push(3)
stack.push(5)
console.log(stack.min())
// => 3

stack.pop()
stack.push(7)
console.log(stack.min())
// => 3

stack.push(2)
console.log(stack.min())
// => 2

stack.pop()
console.log(stack.min())
// => 3

module.exports = Stack