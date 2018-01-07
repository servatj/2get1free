const R = require('ramda')

const getGroups = (arr) => arr.length - 2;

const getMaxDiscount = (arr) => {
  if (typeof maxDiscount === 'undefined') maxDiscount = 0;
  if (arr.length == 0) {
    totalDiscount = maxDiscount
    maxDiscount = 0
    return totalDiscount
  }
  const res = arr.reduce((curr, val, i) => {
    const temp = Math.min(...arr.slice(i, 3 + i))
      if (i < getGroups(arr)) return curr[0] > temp ? curr : [ temp, i ]
      return curr
  }, [], arr)
  left = arr.slice(0, res[1]).length >= 3 ? arr.slice(0, res[1]) : []
  right = arr.slice(res[1] + 3, arr.length).length >= 3 ? arr.slice(res[1] + 3, arr.length) : []
  arr = R.concat(left, right)
  maxDiscount = maxDiscount + res[0]
  return getMaxDiscount(arr)
}

module.exports = {
  getMaxDiscount,
};



