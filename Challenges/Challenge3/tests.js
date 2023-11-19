const bouncer = require('./falsy-bouncer')
const assert = require('assert')

describe('Tests', function () {
  it('bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].', function () {
    assert.deepStrictEqual(bouncer([7, 'ate', '', false, 9]), [7, 'ate', 9])
  })
  it('bouncer(["a", "b", "c"]) should return ["a", "b", "c"].', function () {
    assert.deepStrictEqual(bouncer(['a', 'b', 'c']), ['a', 'b', 'c'])
  })
  it('bouncer([false, null, 0, NaN, undefined, ""]) should return [].', function () {
    assert.deepStrictEqual(bouncer([false, null, 0, NaN, undefined, '']), [])
  })
  it('bouncer([null, NaN, 1, 2, undefined]) should return [1, 2].', function () {
    assert.deepStrictEqual(bouncer([null, NaN, 1, 2, undefined]), [1, 2])
  })
})
