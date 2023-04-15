const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let res = [];
  for (i = 0; i < names.length; i++) {
    let count = -1;
    let begin = names.slice(0, i + 1);
    for (j = 0; j <= i; j++) {
      if (names[i] === begin[j]) { count++ }
    }
    if (count > 0) {
      res.push(`${names[i]}` + `(${count})`)
    } else { if (!res.includes(names[i])) { res.push(`${names[i]}`) } else { res.push(`${names[i]}` + "(1)") } }
  }
  // console.log(res);
  return res;
}

module.exports = {
  renameFiles
};
a = ["file", "file", "image", "file(1)", "file"];
renameFiles(a);