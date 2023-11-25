const challenge = require('./challenge')
const arrayToTree = challenge.arrayToTree
const postOrder = challenge.postOrder
const assert = require('assert')

describe('Tests', function () {
  it('1st_test', function () {
    // Failure message: 
    // Order of methods called: tree = array_to_tree([10, 1, 2, 3, 4, 5, 6], 0) -> post_order(tree)

    const tree = arrayToTree([10, 1, 2, 3, 4, 5, 6], 0)
    assert(postOrder(tree).replace(/^\s+|\s+$/g, '') === '3 4 1 5 6 2 10')
  })

  it('2nd_test', function () {
    // Failure message: 
    // Order of methods called: tree = array_to_tree([2, 7, 5, 2, 6, 0, 9], 0) -> post_order(tree)

    const tree = arrayToTree([2, 7, 5, 2, 6, 0, 9], 0)
    assert(postOrder(tree).replace(/^\s+|\s+$/g, '') === '2 6 7 9 5 2')
  })

  it('3rd_test', function () {
    // Failure message: 
    // Order of methods called: tree = array_to_tree([1, 2, 3, 4, 5, 6, 7, 8, 9], 0) -> post_order(tree)

    const tree = arrayToTree([1, 2, 3, 4, 5, 6, 7, 8, 9], 0)
    assert(postOrder(tree).replace(/^\s+|\s+$/g, '') === '8 9 4 5 2 6 7 3 1')
  })

  it('4th_test', function () {
    // Failure message: 
    // Order of methods called: tree = array_to_tree([1, 7, 5, 2, 6, 0, 9, 3, 7, 5, 11, 0, 0, 4, 0], 0) -> post_order(tree)

    const tree = arrayToTree([1, 7, 5, 2, 6, 0, 9, 3, 7, 5, 11, 0, 0, 4, 0], 0)
    assert(postOrder(tree).replace(/^\s+|\s+$/g, '') === '3 7 2 5 11 6 7 4 9 5 1')
  })
})