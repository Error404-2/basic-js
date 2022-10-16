const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    console.log("getLength");
    // remove line with error and write your code here
  },
  addLink(value) {
    if (typeof value != 'number') {
      throw new Error("You can\'t remove incorrect link!")
    }
    console.log("addLink");
    // remove line with error and write your code here
  },
  removeLink(position) {
    if (typeof position != 'number') {
      throw new Error("You can\'t remove incorrect link!")
    }
    console.log("removeLink");
    // remove line with error and write your code here
  },
  reverseChain() {
    console.log("reverseChain");
    // remove line with error and write your code here
  },
  finishChain() {
    console.log("finishChain");
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
