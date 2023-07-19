// hasher
let hashMessage;
let combineMessage;

// transaction
let composeSendTransaction;
let composeSct;
let composeSct20Transfer;
let composeSct21Transfer;
let composeSct22Transfer;

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
      hashMessage = web.hahser.hashMessage;
      combineMessage = web.hahser.combineMessage;

      // transaction
      composeSendTransaction = web.transaction.composeSendTransaction;
      composeSct = web.transaction.composeSct;
      composeSct20Transfer = web.transaction.composeSct20Transfer;
      composeSct21Transfer = web.transaction.composeSct21Transfer;
      composeSct22Transfer = web.transaction.composeSct22Transfer;

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
    hashMessage = cli.hahser.hashMessage;
    combineMessage = cli.hahser.combineMessage;

    // transaction
    composeSendTransaction = cli.transaction.composeSendTransaction;
    composeSct = cli.transaction.composeSct;
    composeSct20Transfer = cli.transaction.composeSct20Transfer;
    composeSct21Transfer = cli.transaction.composeSct21Transfer;
    composeSct22Transfer = cli.transaction.composeSct22Transfer;

    // utils
    toValueString = cli.utils.toValueString;
    stringToUtf8 = cli.utils.stringToUtf8;
    utf8ToString = cli.utils.utf8ToString;
    toRlp = cli.utils.toRlp;
    pubkeyHash = cli.utils.pubkeyHash;

    console.log('api_cli.js loaded');
  }
})();

exports.hahser = {
  hashMessage,
  combineMessage
}
exports.transaction = {
  composeSendTransaction,
  composeSct,
  composeSct20Transfer,
  composeSct21Transfer,
  composeSct22Transfer
}
exports.utils = {
  toValueString,
  stringToUtf8,
  utf8ToString,
  toRlp,
  pubkeyHash
}
