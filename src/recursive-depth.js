const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let dep = 1;
    for (let elements of arr) {
      if (elements instanceof Array) {
        dep += 1;
        console.log('внутри рекурсии', dep);
        return calculateDepth(elements);
      }
      console.log("выход из цикла", dep);
      return dep;
    }
    // remove line with error and write your code here
  }
}

module.exports = {
  DepthCalculator
};
