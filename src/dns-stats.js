const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domainsArray) {
  let array = domainsArray.map(item=>transformItem(item))
  function transformItem(item){
    arr=item.split('');
    let domains = [];
    let accum=['.'];
    for (let i=0; i<arr.length; i++){
        if (arr[i]!='.')
            accum.push(arr[i])
        else {
            domains.push(accum.join(''));
            accum=['.'];
        }
    }
    domains.push(accum.join(''));
    domains.reverse();
  
    //группируем домены
    let cash=[];
    let groupDomains = [];
    domains.forEach(item=>{
      cash.push(item);
      groupDomains.push(cash.join(''))
    })
    return groupDomains
  }
  let unionArr = [];
  array.forEach(item=>{
    unionArr=unionArr.concat(item)
  });

  let output = {};
  reducer(unionArr);
  function reducer(array){
      let copiedArray = array.slice();
      while (copiedArray.length!=0){
          debugger
          let key=copiedArray[0];
          val = 0;
          copiedArray.forEach(item=>{
              if (item===key) val++
          })
          let cash = copiedArray.filter(item=>(item!=key));
          copiedArray = cash.slice();
          output[key]=val;
      }
  }
  return output;
}

module.exports = {
  getDNSStats
};
