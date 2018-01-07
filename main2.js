const R = require('ramda')

var items = [10,20,17,7,16,19,16]
//var items = [15,15,15,15,15,15]
var totalMin = 0
var left = []
var right = []

const getMaxDiscount = (arr) => {
  console.log('arr ',arr)
  min = 0
   const res = arr.reduce((curr, val, i) => {
    return curr > Math.min(...arr.slice(i, 3 + i)) ? curr : Math.min(...arr.slice(i, 3 + i))
    return [ curr, idx ]
 }, [], arr)
   console.log('res', res)
  for (var i = 0; i < getGroups(arr); i++) {
    if (min <= Math.min(...arr.slice(i, 3 + i))) {
       min = Math.min(...arr.slice(i, 3 + i));
       index = i;
    }
  }
  if (arr.slice(0, index).length > 3) left = arr.slice(0, index)
  if (arr.slice(index + 3, arr.length).length > 3) right =  arr.slice(index + 3, arr.length)
  items = R.concat(left, right)
  console.log('items ',items)
  left = []
  right = []
  index = 0
  console.log('re items ',items , 'min', min)
  return min
}

const getGroups = (arr) => arr.length - 2;

while (items.length > 0) {
  totalMin = totalMin + getMaxDiscount(items)
}

console.log('min' + totalMin)



module.exports = {
  getMaxDiscount,
};

