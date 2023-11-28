const findDuplicates = require('./challenge')
const assert = require('assert')

describe('Tests', function () { 
  it('array_of_fifteen_positions', function () {
    // Failure message: 
    // Method called: find_duplicates([3, 443, 67, 25, 501, 917, 23, 888, -402, 235, 377, 99, 311, 443, 1])
    const arr = [3, 443, 67, 25, 501, 917, 23, 888, -402, 235, 377, 99, 311, 443, 1]
    assert(JSON.stringify(findDuplicates(arr)) === JSON.stringify([443]))
  })
  
  it('array_of_nine_positions', function () {
    // Failure message: 
    // Method called: find_duplicates([4376, -345, -345, 4376, -345, 84945, 4376, -345, -26509])
    const arr = [4376, -345, -345, 4376, -345, 84945, 4376, -345, -26509]
    assert(JSON.stringify(findDuplicates(arr)) === JSON.stringify([-345, 4376, -345, 4376, -345]))
  })
  
  it('array_of_eleven_positions', function () {
    // Failure message: 
    // Method called: find_duplicates([2367, -65326, 134, -185007, 3291, 7832, -65326, 789, 980, -3289, 3490])
    const arr = [2367, -65326, 134, -185007, 3291, 7832, -65326, 789, 980, -3289, 3490]
    assert(JSON.stringify(findDuplicates(arr)) === JSON.stringify([-65326]))
  })
  
  it('array_of_twenty_positions', function () {
    // Failure message: 
    // Method called: find_duplicates([85, 105, 90, 275, 30, 100, 275, 110, 125, 130, 275, 10, 20, 30, 45, 50, 275, 65, 70, 111])
    const arr = [85, 105, 90, 275, 30, 100, 275, 110, 125, 130, 275, 10, 20, 30, 45, 50, 275, 65, 70, 111]
    assert(JSON.stringify(findDuplicates(arr)) === JSON.stringify([275, 275, 30, 275]))
  })
})