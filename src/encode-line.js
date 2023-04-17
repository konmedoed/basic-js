const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(val) {
  function codewars(str){
    let modStr = str;
    let arr=[];
    if (modStr!=0){
      arr[0]=[1, modStr[0]];
      for (let i=1; i<modStr.length; i++){
        if (modStr[i]===modStr[i-1])
          arr[arr.length-1][0] +=1;
        else arr.push([1,modStr[i]])
      }
    }
    return arr
  }
  let arr = codewars(val);
  let output = arr.map(item=>{
    if (item[0]===1) return item[1]
    return item[0]+item[1]
  })
  return output.join('')
}

module.exports = {
  encodeLine
};
