const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direction = true){
    this.direct = direction;
    this.alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('Incorrect arguments!');
    const arr = message.split('');
    const keyArr = key.split('');
    const transformedArr = [];
    let keyLetterIndex = 0;
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i].search(/[a-zA-Z]/) !== 0) {
        transformedArr.push(arr[i]);
        continue
      }
      const messageLetterIndex = this.alphabet.findIndex(item => item === arr[i].toLowerCase());
      if (keyLetterIndex > keyArr.length - 1) keyLetterIndex = 0;
      const keyIndex = this.alphabet.findIndex(item => item === keyArr[keyLetterIndex].toLowerCase());
      transformedArr.push(this.alphabet[(messageLetterIndex + keyIndex)%26]);
      keyLetterIndex += 1;
    }
    if (this.direct) return transformedArr.join('').toUpperCase();
    return transformedArr.reverse().join('').toUpperCase();
  }
  decrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('Incorrect arguments!');
    const arr = message.toLowerCase().split('');
    const keyArr = key.toLowerCase().split('');
    const transformedArr = [];
    let keyLetterIndex = 0;
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i].search(/[a-zA-Z]/) !== 0) {
        transformedArr.push(arr[i]);
        continue
      }
      const messageLetterIndex = this.alphabet.findIndex(item => item === arr[i]);
      if (keyLetterIndex > keyArr.length - 1) keyLetterIndex = 0;
      const keyIndex = this.alphabet.findIndex(item => item === keyArr[keyLetterIndex]);
      const index = (messageLetterIndex - keyIndex) >= 0 ? (messageLetterIndex - keyIndex) : (26 + (messageLetterIndex - keyIndex));
      transformedArr.push(this.alphabet[index]);
      keyLetterIndex += 1;
    }
    if (this.direct) return transformedArr.join('').toUpperCase();
    return transformedArr.reverse().join('').toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine
};
