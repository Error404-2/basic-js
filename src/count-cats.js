const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let res = 0;
  for (let i in matrix) {
    for (let j in matrix[i]) {
      //console.log(matrix[i][j]);
      if (matrix[i][j] == "^^") {
        res += 1;
      }
    }
  }
  return res;
  // remove line with error and write your code here
}

module.exports = {
  countCats
};

/*describe('base requirements', () => {
    it.optional('level 0.1', () => {
      assert.equal(*/
countCats([
  ['##', 'dd', '00'],
  ['^^', '..', 'ss'],
  ['AA', 'dd', 'Oo'],
])

/*1);
});

it.optional('level 0.2', () => {
assert.equal(countCats([
 ['##', 'dd', '00'],
 ['^ ^', '..', 'ss'],
 ['AA', 'dd', 'Oo'],
]), 0);
});

it.optional('level 0.3', () => {
assert.equal(countCats([
 ['##', 'dd', '00'],
 [' ^^ ', '..', 'ss'],
 ['AA', 'dd', 'Oo'],
]), 0);
});

it.optional('level 0.4', () => {
assert.equal(countCats([
 ['##', 'dd', '00'],
 ['^', '^', 'ss'],
 ['AA', 'dd', 'Oo'],
]), 0);
});

it.optional('level 0.5', () => {
assert.equal(countCats([]), 0);
});
});

describe('functional requirements', () => {
it.optional('level 1', () => {
assert.equal(countCats([
 ["^^", ".", null, 0, false, "", NaN, "^^", 2, true, "dasdas", 1],
 [2, null, 0, 1, ".", "dasdas", true, NaN, "", false, "^^", "^^"],
 [false, ".", 1, 0, "^^", null, "", 2, "dasdas", "^^", NaN, true],
 [".", false, 1, null, NaN, 2, 0, "dasdas", true, "^^", "", "^^"],
 [false, ".", 1, 0, "^^", true, null, "^^", "", NaN, 2, "dasdas"],
 [false, NaN, 1, 0, ".", "^^", null, true, "dasdas", "^^", 2, ""],
 [null, 1, NaN, true, ".", "^^", "^^", 2, "", false, "dasdas", 0],
 [null, NaN, "", false, ".", 1, 0, "^^", "dasdas", true, 2, "^^"],
]), 16);
});

it.optional('level 2', () => {
assert.equal(countCats([
 ["^^", ".", null, 0, false, "", NaN, 2, true, "dasdas", 1],
 [2, NaN, "", false, "^^", "^^"],
 [false, ".", 1, 0, "^^", null, "", 2, "dasdas", "^^", NaN, true],
 ["."],
 [false, ".", 1, 0, "^^", true, null, "^^", "", NaN, 2, "dasdas"],
 [false, NaN, 1, 0, ".", "^^"],
 [null, 1, NaN],
 [],
]), 8);
});

it.optional('level 3', () => {
const stringSet = ['aa', '##', false, NaN, 2, 3, '^ ^', undefined, 54, ' ^^'];
for (let i = 3; i < 60; i++) {
 const { backyard, count } = fakeRandom({ rows: i, cols: i, stringSet });
 assert.equal(countCats(backyard), count);
}
});
});
});*/

