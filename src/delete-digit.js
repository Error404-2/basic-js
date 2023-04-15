const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = n.toString();
  let res = 0;
  for (i = 0; i < str.length; i++) {
    let s = parseInt(str.slice(0, i) + str.slice(i + 1));
    if (s > res) {
      res = s;
    }
  }
  return res;
}

module.exports = {
  deleteDigit
};

deleteDigit(152);
deleteDigit(1001);
deleteDigit(10);
deleteDigit(222219);
deleteDigit(109);
deleteDigit(342)

