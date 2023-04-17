const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let domain;
  let arr = email.split('');
  arr.reverse();
  let index = arr.findIndex(item=>item==='@');
  domain = arr.slice(0, index);
    domain.reverse()
  return domain.join('')
}

module.exports = {
  getEmailDomain
};
