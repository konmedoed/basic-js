const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let additionStr = (options.addition !== undefined ? options.addition: '');
  if (options.additionRepeatTimes > 1){
    for (let i = 2; i <= options.additionRepeatTimes; i += 1){
      additionStr += (options.additionSeparator !== undefined ? options.additionSeparator : '|');
      additionStr += options.addition;
    }
  }
  let basicStr = str + additionStr;
  let exitStr = basicStr;
  if (options.repeatTimes > 1){
    for (let i = 2; i <= options.repeatTimes; i += 1){
      exitStr += (options.separator !== undefined ? options.separator : '+');
      exitStr += basicStr;
    }
  }
  return exitStr;
}

module.exports = {
  repeater
};
