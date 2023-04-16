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
let sdvig = "abcdefghijklmnopqrstuvwxyz";
sdvig = sdvig.toUpperCase();

class VigenereCipheringMachine {
  constructor(flag = true) {
    this.flag = flag;
  }

  encrypt(message, key) {
    if ((!message) || (!key)) {
      throw new Error("Incorrect arguments!")
    }
    this.message = message;
    this.key = key;
    let strRes = [];
    for (i = 0; i < this.message.length; i++) {
      let position = sdvig.indexOf(this.message[i]);
      let keyPosition = i % this.key.length;
      let indexKey = sdvig.indexOf(this.key[keyPosition]);
      let sumPosition = (position + indexKey) % 26;
      strRes.push(sdvig[sumPosition]);
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

module.exports = {
  VigenereCipheringMachine
};