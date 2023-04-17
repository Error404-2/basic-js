const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
let abc = "abcdefghijklmnopqrstuvwxyz";
abc = abc.toUpperCase();

class VigenereCipheringMachine {
  constructor(flag = true) {
    this.flag = flag;
    console.log("конструктор", flag);
  }

  encrypt(message, key) {
    if ((!message) || (!key)) {
      throw new Error("Incorrect arguments!")
    }
    this.message = message.toUpperCase();
    this.key = key.toUpperCase();
    let strRes = [];
    let j = 0;
    for (let i = 0; i < this.message.length; i++) {
      if (/[A-Z]/.test(this.message[i])) {
        let position = abc.indexOf(this.message[i]);
        let keyPosition = j % this.key.length;
        j++;
        let indexKey = abc.indexOf(this.key[keyPosition]);
        let sumPosition = (position + indexKey) % 26;
        strRes.push(abc[sumPosition]);
      } else {
        strRes.push(this.message[i]);
      }
    }
    let res = strRes.join('');
    console.log("+++++++++++++++++", strRes, res);
    return res;
  }
  decrypt(encryptedMessage, key) {
    if ((!encryptedMessage) || (!key)) {
      throw new Error("Incorrect arguments!")
    }
    this.encryptedMessage = encryptedMessage;
    this.key = key;
  }
}
// const vig = new VigenereCipheringMachine(false);
// vig.encrypt('attack at dawn!', 'alphonse');

module.exports = {
  VigenereCipheringMachine
};