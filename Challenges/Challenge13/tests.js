const repeatStringNumTimes = require('./repeat-a-string')
const assert = require('assert')

describe('Tests', function () {
  it('repeatStringNumTimes("*", 3) should return "***".', function () {
    assert(repeatStringNumTimes('*', 3) === '***')
  })
  it('repeatStringNumTimes("abc", 3) should return "abcabcabc".', function () {
    assert(repeatStringNumTimes('abc', 3) === 'abcabcabc')
  })
  it('repeatStringNumTimes("abc", 4) should return "abcabcabcabc".', function () {
    assert(repeatStringNumTimes('abc', 4) === 'abcabcabcabc')
  })
  it('repeatStringNumTimes("abc", 1) should return "abc".', function () {
    assert(repeatStringNumTimes('abc', 1) === 'abc')
  })
  it('repeatStringNumTimes("*", 8) should return "********".', function () {
    assert(repeatStringNumTimes('*', 8) === '********')
  })
  it('repeatStringNumTimes("abc", -2) should return "".', function () {
    assert(repeatStringNumTimes('abc', -2) === '')
  })
  it('repeatStringNumTimes("abc", 0) should return "".', function () {
    assert(repeatStringNumTimes('abc', 0) === '')
  })
})