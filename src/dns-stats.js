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
function getDNSStats(domains) {
  let res = {};
  for (domain of domains) {
    let dns;
    let arr = domain.split(".");
    arr.reverse();
    let key = "."
    for (i = 0; i < arr.length; i++) {
      if (i === 0) {
        key = `.${arr[0]}`;
      } else {
        key += `.${arr[i]}`;
      }
      let valueCounter = 0;
      if (!(key in res)) {
        for (elem of domains) {
          if (elem.includes(arr[i]))
            valueCounter++;
        }
        res[key] = valueCounter;
      }
    }
  }
  return res;
}

module.exports = {
  getDNSStats
};

let examp = ['code.yandex.ru', 'music.yandex.ru', 'yandex.ru'];
getDNSStats(examp);