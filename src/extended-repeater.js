const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  let res = '';
  let add_str = '';
  if (!(options.repeatTimes)) {
    options.repeatTimes = 1;
  } else {
    options.repeatTimes = Number(options.repeatTimes);
  }
  ///console.log(options);

  ///console.log(options.additionRepeatTimes);
  //console.log(options.additionSeparator);
  //console.log(options.addition);
  //console.log(!(options.additionRepeatTimes) & (options.additionSeparator || options.addition));

  if (!(options.additionRepeatTimes) && (options.additionSeparator || options.addition)) {
    options.additionRepeatTimes = 1;
    //console.log("сработало");
  }
  /*if (options.addition) {
    str = str + options.addition;
  }
  if (options.additionSeparator) {
    str = str + options.additionSeparator;
  }*/
  if (!(options.separator)) {
    options.separator = '+';
  }
  if (!(options.additionSeparator)) {
    options.additionSeparator = '|';
  }
  if (typeof str != 'string') {
    str = str.toString();
  }


  if (options.additionRepeatTimes) {
    options.additionRepeatTimes = Number(options.additionRepeatTimes);
    //console.log("адишн");
    if (options.addition) {
      options.addition = options.addition.toString();
      add_str += options.addition;
    }
    if (options.additionSeparator) {
      options.additionSeparator = options.additionSeparator.toString();
      add_str += options.additionSeparator;
    }
    str = str + add_str.repeat(options.additionRepeatTimes);
  }

  if (options.additionRepeatTimes) {
    //console.log(options.additionSeparator);
    //console.log(str);
    let end = str.lastIndexOf(options.additionSeparator);
    //console.log(end);
    str = str.slice(0, end)
    //console.log(str);
  }

  if (options.separator) {
    //console.log(str);
    options.separator = options.separator.toString()
    str = str + options.separator;
    //console.log(str);
  }

  if (options.repeatTimes) {
    res = str.repeat(options.repeatTimes);
    //console.log(res);
  }

  if (options.separator) {
    let end_main = res.lastIndexOf(options.separator);
    //console.log(res);
    res = res.slice(0, end_main);
  }

  //console.log(res);
  return res;
  // remove line with error and write your code here
}

module.exports = {
  repeater
};
/*repeater('la', {
  repeatTimes: 3,
  //separator: '**',
  //addition: 'PLUS',
  //additionRepeatTimes: 3,
  //additionSeparator: '00',
})*/
//repeater(new Set(), { repeatTimes: 3, separator: '??? ', addition: [1, 2, 3, '4'], additionRepeatTimes: 2, additionSeparator: '!!!' });
//'[object Set]1,2,3,4!!!1,2,3,4??? [object Set]1,2,3,4!!!1,2,3,4??? [object Set]1,2,3,4!!!1,2,3,4'


