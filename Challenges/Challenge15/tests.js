const sumFibs = require('./sum-all-odd-fibonacci-numbers')
const assert = require('assert')

describe('Tests', function () {
  it('sumFibs(1) should return a number.', function () {
    assert(typeof sumFibs(1) === 'number')
  })
  it('sumFibs(1000) should return 1785.', function () {
    assert(sumFibs(1000) === 1785)
  })
  it('sumFibs(4000000) should return 4613732.', function () {
    assert(sumFibs(4000000) === 4613732)
  })
  it('sumFibs(4) should return 5.', function () {
    assert(sumFibs(4) === 5)
  })
  it('sumFibs(75024) should return 60696.', function () {
    assert(sumFibs(75024) === 60696)
  })
  it('sumFibs(75025) should return 135721.', function () {
    assert(sumFibs(75025) === 135721)
  })
})