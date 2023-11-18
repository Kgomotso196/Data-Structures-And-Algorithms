const convertToRoman = require('./roman-numeral-converter')
const assert = require('assert')

describe('Tests', function () {
  it('convertToRoman(2) should return "II".', function () {
    assert.deepStrictEqual(convertToRoman(2), 'II')
  })
  it('convertToRoman(3) should return "III".', function () {
    assert.deepStrictEqual(convertToRoman(3), 'III')
  })
  it('convertToRoman(4) should return "IV".', function () {
    assert.deepStrictEqual(convertToRoman(4), 'IV')
  })
  it('convertToRoman(5) should return "V".', function () {
    assert.deepStrictEqual(convertToRoman(5), 'V')
  })
  it('convertToRoman(9) should return "IX".', function () {
    assert.deepStrictEqual(convertToRoman(9), 'IX')
  })
  it('convertToRoman(12) should return "XII".', function () {
    assert.deepStrictEqual(convertToRoman(12), 'XII')
  })
  it('convertToRoman(16) should return "XVI".', function () {
    assert.deepStrictEqual(convertToRoman(16), 'XVI')
  })
  it('convertToRoman(29) should return "XXIX".', function () {
    assert.deepStrictEqual(convertToRoman(29), 'XXIX')
  })
  it('convertToRoman(44) should return "XLIV".', function () {
    assert.deepStrictEqual(convertToRoman(44), 'XLIV')
  })
  it('convertToRoman(45) should return "XLV"', function () {
    assert.deepStrictEqual(convertToRoman(45), 'XLV')
  })
  it('convertToRoman(68) should return "LXVIII"', function () {
    assert.deepStrictEqual(convertToRoman(68), 'LXVIII')
  })
  it('convertToRoman(83) should return "LXXXIII"', function () {
    assert.deepStrictEqual(convertToRoman(83), 'LXXXIII')
  })
  it('convertToRoman(97) should return "XCVII"', function () {
    assert.deepStrictEqual(convertToRoman(97), 'XCVII')
  })
  it('convertToRoman(99) should return "XCIX"', function () {
    assert.deepStrictEqual(convertToRoman(99), 'XCIX')
  })
  it('convertToRoman(400) should return "CD"', function () {
    assert.deepStrictEqual(convertToRoman(400), 'CD')
  })
  it('convertToRoman(500) should return "D"', function () {
    assert.deepStrictEqual(convertToRoman(500), 'D')
  })
  it('convertToRoman(501) should return "DI"', function () {
    assert.deepStrictEqual(convertToRoman(501), 'DI')
  })
  it('convertToRoman(649) should return "DCXLIX"', function () {
    assert.deepStrictEqual(convertToRoman(649), 'DCXLIX')
  })
  it('convertToRoman(798) should return "DCCXCVIII"', function () {
    assert.deepStrictEqual(convertToRoman(798), 'DCCXCVIII')
  })
  it('convertToRoman(891) should return "DCCCXCI"', function () {
    assert.deepStrictEqual(convertToRoman(891), 'DCCCXCI')
  })
  it('convertToRoman(1000) should return "M"', function () {
    assert.deepStrictEqual(convertToRoman(1000), 'M')
  })
  it('convertToRoman(1004) should return "MIV"', function () {
    assert.deepStrictEqual(convertToRoman(1004), 'MIV')
  })
  it('convertToRoman(1006) should return "MVI"', function () {
    assert.deepStrictEqual(convertToRoman(1006), 'MVI')
  })
  it('convertToRoman(1023) should return "MXXIII"', function () {
    assert.deepStrictEqual(convertToRoman(1023), 'MXXIII')
  })
  it('convertToRoman(2014) should return "MMXIV"', function () {
    assert.deepStrictEqual(convertToRoman(2014), 'MMXIV')
  })
  it('convertToRoman(3999) should return "MMMCMXCIX"', function () {
    assert.deepStrictEqual(convertToRoman(3999), 'MMMCMXCIX')
  })
})
