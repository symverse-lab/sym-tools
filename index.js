// hasher
let hashMessage;
let combineMessage;

// transaction
let composeSendTransaction;
let composeSct;
let composeSct20Transfer;
let composeSct21Transfer;
let composeSct22Transfer;
let parseRawTx;
let parseSct;
let recover;
let recoverFromRawTx;
let _signMessage;

// utils
let toValueString;
let stringToUtf8;
let utf8ToString;
let toRlp;
let pubkeyHash;

(() => {
  try {
    const windowPrototype = Window.prototype;

    try {
      const web = require('./api_web');

      // hahser
      hashMessage = web.hasher.hashMessage;
      combineMessage = web.hasher.combineMessage;

      // transaction
      composeSendTransaction = web.transaction.composeSendTransaction;
      composeSct = web.transaction.composeSct;
      composeSct20Transfer = web.transaction.composeSct20Transfer;
      composeSct21Transfer = web.transaction.composeSct21Transfer;
      composeSct22Transfer = web.transaction.composeSct22Transfer;
      parseRawTx = web.transaction.parseRawTx;
      parseSct = web.transaction.parseSct;
      recover = web.transaction.recover;
      recoverFromRawTx = web.transaction.recoverFromRawTx;

      // utils
      toValueString = web.utils.toValueString;
      stringToUtf8 = web.utils.stringToUtf8;
      utf8ToString = web.utils.utf8ToString;
      toRlp = web.utils.toRlp;
      pubkeyHash = web.utils.pubkeyHash;

      console.log('api_web.js loaded');
    } catch (e) {
      console.error(e);
    }
  } catch (e) {
    // console.error(e);

    const cli = require('./api_cli');

    // hahser
    hashMessage = cli.hasher.hashMessage;
    combineMessage = cli.hasher.combineMessage;

    // transaction
    composeSendTransaction = cli.transaction.composeSendTransaction;
    composeSct = cli.transaction.composeSct;
    composeSct20Transfer = cli.transaction.composeSct20Transfer;
    composeSct21Transfer = cli.transaction.composeSct21Transfer;
    composeSct22Transfer = cli.transaction.composeSct22Transfer;
    parseRawTx = cli.transaction.parseRawTx;
    parseSct = cli.transaction.parseSct;
    recover = cli.transaction.recover;
    recoverFromRawTx = cli.transaction.recoverFromRawTx;
    _signMessage = cli.transaction._signMessage;

    // utils
    toValueString = cli.utils.toValueString;
    stringToUtf8 = cli.utils.stringToUtf8;
    utf8ToString = cli.utils.utf8ToString;
    toRlp = cli.utils.toRlp;
    pubkeyHash = cli.utils.pubkeyHash;

    console.log('api_cli.js loaded');
  }
})();

exports.hasher = {
  hashMessage,
  combineMessage
}
exports.transaction = {
  composeSendTransaction,
  composeSct,
  composeSct20Transfer,
  composeSct21Transfer,
  composeSct22Transfer,
  parseRawTx,
  parseSct,
  recover,
  recoverFromRawTx,
  _signMessage
}
exports.utils = {
  toValueString,
  stringToUtf8,
  utf8ToString,
  toRlp,
  pubkeyHash
}
