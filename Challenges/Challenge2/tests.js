const booWho = require('./boo-who')
const assert = require('assert')

describe('Tests', function () {
  it('booWho(true) should return true.', function () {
    assert.strictEqual(booWho(true), true)
  })
  it('booWho(false) should return true.', function () {
    assert.strictEqual(booWho(false), true)
  })
  it('booWho([1, 2, 3]) should return false.', function () {
    assert.strictEqual(booWho([1, 2, 3]), false)
  })
  it('booWho([].slice) should return false.', function () {
    assert.strictEqual(booWho([].slice), false)
  })
  it('booWho({ "a": 1 }) should return false.', function () {
    assert.strictEqual(booWho({ a: 1 }), false)
  })
  it('booWho(1) should return false.', function () {
    assert.strictEqual(booWho(1), false)
  })
  it('booWho(NaN) should return false.', function () {
    assert.strictEqual(booWho(NaN), false)
  })
  it('booWho("a") should return false.', function () {
    assert.strictEqual(booWho('a'), false)
  })
  it('booWho("true") should return false.', function () {
    assert.strictEqual(booWho('true'), false)
  })
  it('booWho("false") should return false.', function () {
    assert.strictEqual(booWho('false'), false)
  })
})
