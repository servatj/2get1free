const R = require('ramda')

const getGroups = (arr) => arr.length - 2;

const getMaxDiscount = (arr) => {
  var maxDiscount = 0
  while (arr.length > 0) {
    const res = arr.reduce((curr, val, i) => {
      const temp = Math.min(...arr.slice(i, 3 + i))
      if (i < getGroups(arr)){
         return curr[0] > Math.min(...arr.slice(i, 3 + i)) ? curr : [Math.min(...arr.slice(i, 3 + i)), i]
      }
      return curr
    }, [], arr)
    left = arr.slice(0, res[1]).length >= 3 ? arr.slice(0, res[1]) : []
    right = arr.slice(res[1] + 3, arr.length).length >= 3 ? arr.slice(res[1] + 3, arr.length) : []
    arr = R.concat(left, right)
    maxDiscount = maxDiscount + res[0]
  }
  return maxDiscount
}

module.exports = {
  getMaxDiscount,
};



