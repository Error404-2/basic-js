const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(Nt) {
  if (!(typeof Nt == "string")) {
    // console.log("Неверный тип ввода данных");
    return false;
  }
  Nt = Number(Nt);
  if (!isFinite(Nt) && isNaN(Nt)) {
    // console.log("не число");
    return false;
  }
  if (Nt <= 0) {
    // console.log("неположительное");
    return false;
  }
  let res = -(HALF_LIFE_PERIOD * Math.log(Nt / MODERN_ACTIVITY) / Math.log(2));
  res = Math.ceil(res);
  // console.log(res);
  if (res <= 0) {
    // console.log("неположительный результат");
    return false;
  }
  return res;
  // remove line with error and write your code here
}
module.exports = {
  dateSample
};
dateSample("9000.01");
//dateSample('one');
//dateSample('');
//dateSample(' ');
//dateSample(' \n\t\r');

