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
  console.log(arguments);
  const season_list = ['winter', 'spring', 'summer', 'autumn'];
  /*if (date.length < 3) {year, month, day
    throw 'Invalid date!';
    //console.log('Unable to determine the time of year!')
  }*/
  if (!(arguments[0])) {
    // console.log("нулевая проверка");
    return 'Unable to determine the time of year!';
  }
  if (arguments.length === 1) {
    // console.log(typeof arguments[0]);
    if (typeof arguments[0] !== 'object') {
      throw new Error('Invalid date!')
    }
    let date = new Date(arguments[0]);
    let month = date.getMonth();
    if (!(date instanceof Date)) {
      throw new Error("Invalid date!");
    }
    if (month > 11 | typeof month != 'number') {
      throw new Error("Invalid date!");
    }
    if (month === 11 | month === 0 | month === 1) {
      console.log(season_list[0])
      return season_list[0];
    }
    for (let i = 1; i < 4; i++) {
      if (month === 3 * i - 1 | month === 3 * i | month === 3 * i + 1) {
        console.log(season_list[i])
        return season_list[i];
      }
    }
  }
  if (1 < arguments.length && arguments.length < 3 | arguments.length === 0) {
    // console.log('Unable to determine the time of year!');
    return 'Unable to determine the time of year!';
  }
  if (arguments.length >= 3) {
    if (arguments[1] === 11 | arguments[1] === 0 | arguments[1] === 1) {
      console.log(season_list[0])
      return season_list[0];
    }
    for (let i = 1; i < 4; i++) {
      if (arguments[1] === 3 * i - 1 | arguments[1] === 3 * i | arguments[1] === 3 * i + 1) {
        console.log(season_list[i])
        return season_list[i];
      }
    }
  }
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};
