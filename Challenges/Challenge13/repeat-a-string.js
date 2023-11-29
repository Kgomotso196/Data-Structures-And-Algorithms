function repeatStringNumTimes (str, num) {
  return num > 0 ? Array(num).fill(str).join("") : "";
}
module.exports = repeatStringNumTimes