const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let arr = email.split("@");
  let res = arr.slice(-1);
  // console.log("the output should be 'example.com'", res[0]);
  return res[0];
}

module.exports = {
  getEmailDomain
};
getEmailDomain('prettyandsimple@example.com');