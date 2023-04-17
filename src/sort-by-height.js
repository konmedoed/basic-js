const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let brr=arr.slice();
    let skipArr=[];
    brr.forEach((item, index)=>{
        if (item===-1) skipArr.push(index)
    })
    brr = brr.filter(item=>item!==-1)
    brr.sort((a,b)=>{
        if (a<b) return -1
        if (a>b) return 1;
        return 0
    })
    skipArr.forEach(item=>{
        brr.splice(item,0,-1)
    })
    return brr
}

module.exports = {
  sortByHeight
};
