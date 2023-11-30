const leftmostNodesSum = require('./challenge')
const assert = require('assert')

describe('Tests', function () {  
  it('first_example', function () {
    // Failure message: 
    // Method called: leftmostNodesSum([2, 7, 5, 2, 6, 0, 9])

    assert(leftmostNodesSum([2, 7, 5, 2, 6, 0, 9]) === 11)
  })

  it('second_example', function () {
    // Failure message: 
    // Method called: leftmostNodesSum([1, 7, 5, 2, 6, 0, 9, 3, 7, 5, 11, 0, 0, 4, 0])

    assert(leftmostNodesSum([1, 7, 5, 2, 6, 0, 9, 3, 7, 5, 11, 0, 0, 4, 0]) === 13)
  })

  it('third_example', function () {
    // Failure message: 
    // Method called: leftmostNodesSum([5, 3, 4, 11, 13, 15, 21, 10, 4, 7, 2, 8, 0, 9, 0])

    assert(leftmostNodesSum([5, 3, 4, 11, 13, 15, 21, 10, 4, 7, 2, 8, 0, 9, 0]) === 29)
  })
})