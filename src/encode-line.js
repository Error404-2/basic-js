const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = "";
  let count = 1;
  if (str.length < 2) {
    return str;
  }
  for (i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
      if (i === str.length - 1) {
        res += `${count}` + `${str[i]}`;
        return res;
      }
    } else {
      if (count > 1) {
        res += `${count}` + `${str[i - 1]}`;
      } else {
        res += `${str[i - 1]}`;
      }
      if (i === str.length - 1) {
        res += `${str[i]}`;
        return res;
      }
      count = 1;
    }
    // console.log("**********************-------++++", res);
  }
}


module.exports = {
  encodeLine
};


encodeLine('aabbbc');