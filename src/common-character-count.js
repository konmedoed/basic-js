const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let sum=0;
  let arr1 = s1.split('');
  let arr2 = s2.split('');
  compareSimb(arr1, arr2);
  function compareSimb(firstArr, secondArr){
    for (let i=0; i<firstArr.length; i++){
        let index = -1;
        index = secondArr.findIndex(item=>{
            if (item===firstArr[i]) return item
        });
        if (index!==-1)
          sum++;
          arr1.splice(i,1);
          arr2.splice(index,1);
            if (arr1.length>0 || arr2.length>0)
                compareSimb(arr1, arr2);
          break
    }
  }
    return sum
}

module.exports = {
  getCommonCharacterCount
};
