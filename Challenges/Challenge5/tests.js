const { sum } = require('./challenge')
const assert = require('assert')

describe('Tests', function () {
  it('sum of 4', function () {
    assert(sum(4) === 10)
  })

  it('sum of 7', function () {
    assert(sum(7) === 28)
  })

  it('sum of 10', function () {
    assert(sum(10) === 55)
  })

  it('sum of 13', function () {
    assert(sum(13) === 91)
  })
})