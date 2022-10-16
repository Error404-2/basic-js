const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  console.log("дано", disksNumber, turnsSpeed);
  let turns, seconds;
  if (disksNumber === 1) {
    turns = 1;
  } else {
    turns = 0;
    for (i = 0; i < disksNumber; i++) {
      turns += 2 ** i;
      console.log("число операций", turns);
    }
  }
  seconds = Math.floor(turns / turnsSpeed * 3600);
  let obj = {
    'turns': turns,
    'seconds': seconds,
  };
  //obj['turns'] = turns;
  //obj['seconds'] = seconds;
  console.log(obj);
  return obj;
  // remove line with error and write your code here
}

module.exports = {
  calculateHanoi
};
//calculateHanoi(3, 10); //{ turns: 31, seconds: 27 });