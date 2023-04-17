const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  list: [],
  getLength(chain) {
    let res = chain.split("~~");
    console.log(res);
    return res.length;
  },
  addLink(value = "") {
    // if (typeof value != 'number') {
    //   throw new Error("You can\'t remove incorrect link!")
    // }
    if (this.list.length > 0) {
      this.list.push(`( ${value} )`);
      // console.log("addlink=====", this.list);
      return this;
    } else {
      this.list.push(`( ${value} )`);
      // console.log("addlink=====", this.list);
      return this;
    }
  },
  removeLink(position) {
    if (!((typeof position === "number") && (Number.isInteger(position)) && (position > 0) && (position <= this.list.length))) {
      throw new Error("You can\'t remove incorrect link!");
    }
    this.list.splice(position - 1, 1);
    // console.log("this.list.splice(position - 1, 1)", this.list);
    return this;
  },
  reverseChain() {
    this.list.reverse();
    return this;
  },
  finishChain() {
    return this.list.join("~~");
  }
};

module.exports = {
  chainMaker
};

// chainMaker.addLink(1).addLink(2).addLink(3).removeLink(0);
// chainMaker.addLink(1).addLink(2).addLink(3).removeLink('2nd');
// chainMaker.addLink(1).addLink(2).addLink(3).removeLink(-2);
// chainMaker.addLink(1).addLink(2).addLink(3).removeLink(3);

// chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain() //'( 3rd )~~( function () { } )';