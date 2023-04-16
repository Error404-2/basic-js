const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let sort = [];
  for (i = 0; i < arr.length; i++) {
    let max = arr.reduce((x, y) => Math.max(x, y));
    if (max > -1) {
      sort.push(max);
      // console.log("++++++++++++++++++++++СОРТИРОВКА", sort);
      let j = arr.indexOf(max);
      arr[j] = -2;
    }
  }
  // console.log("++++++++++++++++++++++СОРТИРОВКА", arr);
  let res = arr.map(iter => iter === -1 ? -1 : sort.pop());
  console.log("++++++++++++++++++++++СОРТИРОВКА", res);
  return res
}

module.exports = {
  sortByHeight
};

let a = [-1, 150, 190, 170, -1, -1, 160, 180];

sortByHeight(a);