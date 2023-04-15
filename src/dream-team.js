const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  //members.sort();
  // console.log(members);
  if (!(members instanceof Array) /*!== 'object'*/) {
    // console.log("не массив");
    return false;
  }
  if (members.length == 0) {
    // console.log("длина ноль");
    return false;
  }
  let res = [];
  for (let m of members) {
    if (typeof m !== "string") {
      continue;
    }
    if (m === " ") {
      continue;
    }
    while (m[0] == " ") {
      m = m.slice(1);
    }
    let fl = m.toUpperCase()[0];
    res.push(fl);
  }
  res.sort();
  let str = res.join("");
  // console.log(str);
  return str;
  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam
};
createDreamTeam(['Peter', 'Adam', 'Gary', 'Bobby', 'Philip', 'Andrea', 'Evelyn', 'Evelyn', 'Kimberly', 'Denise']);
//, 'AABDEEGKPP');
createDreamTeam(3); //false;
createDreamTeam(3.312312);//, false);
createDreamTeam(false);//, false);
createDreamTeam(null);//, false);
createDreamTeam(undefined);//, false);
createDreamTeam({ 'foo': 'bar' });//, false)