const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr=String(n).split('');
  let container = [];
  for (let i=0; i<arr.length; i++){
      let cash = arr.filter((item, index)=>{
        if (index!=i) return item
      });
      container.push(cash.join(''))
  }
  function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }
  return getMaxOfArray(container)
}

module.exports = {
  deleteDigit
};
