const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date == null || date == undefined){
    return 'Unable to determine the time of year!'
  }
  if (typeof(date) != 'object' || Array.isArray(date) || !Date.parse(date)){
    throw new Error ("Invalid date!");
  }

  // let month = date.getMonth();
  let month;
  try {
    month = date.getMonth();
  }
  catch (err) {
    throw new Error ("Invalid date!");
  }
  try {
    let check = date.setMinutes(0);
  }
  catch (err) {
    throw new Error ("Invalid date!");
  }
  
  function season(val){
    if (val>=0 && val<2 || val === 11) return 'winter'
    if (val>=2 && val<5) return 'spring'
    if (val>=5 && val<8) return 'summer'
    else return 'autumn'
  }
  return season(month)
}

module.exports = {
  getSeason
};
