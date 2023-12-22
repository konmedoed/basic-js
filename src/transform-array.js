const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!');
  const brr = [];
  for (let i = 0; i < arr.length; i += 1){
    if (arr[i] === '--discard-next'){
      if (i === arr.length - 1) continue;
      i += 1;
      continue;
    }
    if (arr[i] === '--discard-prev'){
      if (i === 0) continue;
      if (arr[i - 2] === '--discard-next') continue;
      brr.pop();
      continue;
    }
    if (arr[i] === '--double-next'){
      if (i === arr.length - 1) continue;
      brr.push(arr[i+1]);
      continue;
    }
    if (arr[i] === '--double-prev'){
      if (i === 0) continue;
      if (arr[i - 2] === '--discard-next') continue;
      brr.push(arr[i-1]);
      continue;
    }
    brr.push(arr[i]);
  }
  return brr;
}

// function transform(arr) {
//   if (!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!');
//   const brr = arr.filter(item => true);
//   for (let i = 0; i < arr.length; i += 1){
//     if (brr[i] === '--discard-next'){
//       if (i === brr.length - 1) continue;
//       delete brr[i + 1];
//       continue;
//     }
//     if (brr[i] === '--discard-prev'){
//       if (i === 0) continue;
//       delete brr[i - 1];
//       continue;
//     }
//     if (brr[i] === '--double-next'){
//       if (i === brr.length - 1) continue;
//       brr[i] = brr[i + 1];
//       continue;
//     }
//     if (brr[i] === '--double-prev'){
//       if (i === 0) continue;
//       brr[i] = brr[i - 1];
//       continue;
//     }
//   }
//   const crr = brr.filter(item => {
//     if (typeof(item) === 'number') return true
//   })
//   return crr;
// }

module.exports = {
  transform
};
