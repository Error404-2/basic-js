const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let res = [];
  if (!(Array.isArray(arr))) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  let controlSet = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      i++;
      if (i => arr.length) { return res }
    }
    if (arr[i] === '--discard-prev') { if (res.length > 0) { res.pop() } }
    if (arr[i] === '--double-next') {
      if ((i + 1 < arr.length) && (!controlSet.includes(arr[i + 1]))) { res.push(arr[i + 1]) }
    }
    if (arr[i] === '--double-prev') {
      if ((i > 0) && (!controlSet.includes(arr[i - 1]))) {
        res.push(arr[i - 1]);
      }
    }
    if (!controlSet.includes(arr[i])) { res.push(arr[i]) }
  }
  // console.log("===================", res);
  return res;
}

module.exports = {
  transform
};

transform([1, 2, 3, '--double-next', 4, 5]); //=> [1, 2, 3, 4, 4, 5]
transform([1, 2, 3, '--discard-prev', 4, 5]); //=> [1, 2, 4, 5]