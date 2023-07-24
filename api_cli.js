const execSync = require("child_process").execSync;
const path = require("path");
const modulePath = path.resolve(__dirname);

function checkDartRuntime() {
  try {
    execSync("dart --version");
    return true;
  } catch (e) {
    return false;
  }
}

// hasher
function hashMessage(hexMessage) {
  if (checkDartRuntime()) {
    const result = execSync(`dart ${modulePath}/sym-tools-cli.dill hashMessage ${hexMessage}`);
    // console.log(`result: ${result}`);
    const resultString = result.toString('utf8');
    return JSON.parse(resultString);
  } else {
    throw new Error("Dart runtime not found");
  }
}

function combineMessage(hexMessage, hexV, hexR, hexS) {
  if (checkDartRuntime()) {
    const result = execSync(`dart ${modulePath}/sym-tools-cli.dill combineMessage ${hexMessage} ${hexV} ${hexR} ${hexS}`);
    // console.log(`result: ${result}`);
    const resultString = result.toString('utf8');
    return JSON.parse(resultString);
  } else {
    throw new Error("Dart runtime not found");
  }
}

// transaction
function composeSendTransaction(from, hexNonce, hexGasPrice, hexGasLimit, to, hexValue, hexData, hexType, warrantNode, hexExtraData) {
  if (checkDartRuntime()) {
    const result = execSync(`dart ${modulePath}/sym-tools-cli.dill composeSendTransaction ${from} ${hexNonce} ${hexGasPrice} ${hexGasLimit} ${to} ${hexValue} ${hexData} ${hexType} ${warrantNode} ${hexExtraData}`);
    // console.log(`result: ${result}`);
    const resultString = result.toString('utf8');
    return JSON.parse(resultString);
  } else {
    throw new Error("Dart runtime not found");
  }
}

function composeSct(sctType, methodName, params) {
  if (checkDartRuntime()) {
    const result = execSync(`dart ${modulePath}/sym-tools-cli.dill composeSct ${sctType} ${methodName} ${params}`);
    // console.log(`result: ${result}`);
    const resultString = result.toString('utf8');
    return JSON.parse(resultString);
  } else {
    throw new Error("Dart runtime not found");
  }
}

function composeSct20Transfer(recipient, amount) {
  if (checkDartRuntime()) {
    const result = execSync(`dart ${modulePath}/sym-tools-cli.dill composeSct20Transfer ${recipient} ${amount}`);
    // console.log(`result: ${result}`);
    const resultString = result.toString('utf8');
    return JSON.parse(resultString);
  } else {
    throw new Error("Dart runtime not found");
  }
}

function composeSct21Transfer(recipient, amount) {
  if (checkDartRuntime()) {
    const result = execSync(`dart ${modulePath}/sym-tools-cli.dill composeSct21Transfer ${recipient} ${amount}`);
    // console.log(`result: ${result}`);
    const resultString = result.toString('utf8');
    return JSON.parse(resultString);
  } else {
    throw new Error("Dart runtime not found");
  }
}

function composeSct22Transfer(recipient, amount) {
  if (checkDartRuntime()) {
    const result = execSync(`dart ${modulePath}/sym-tools-cli.dill composeSct22Transfer ${recipient} ${amount}`);
    // console.log(`result: ${result}`);
    const resultString = result.toString('utf8');
    return JSON.parse(resultString);
  } else {
    throw new Error("Dart runtime not found");
  }
}

function parseRawTx(rawTx) {
  if (checkDartRuntime()) {
    const result = execSync(`dart ${modulePath}/sym-tools-cli.dill parseRawTx ${rawTx}`);
    // console.log(`result: ${result}`);
    const resultString = result.toString('utf8');
    return JSON.parse(resultString);
  } else {
    throw new Error("Dart runtime not found");
  }
}

function parseSct(hexSctMethod) {
  if (checkDartRuntime()) {
    const result = execSync(`dart ${modulePath}/sym-tools-cli.dill parseSct ${hexSctMethod}`);
    // console.log(`result: ${result}`);
    const resultString = result.toString('utf8');
    return JSON.parse(resultString);
  } else {
    throw new Error("Dart runtime not found");
  }
}

function recover(hexMessage, hexV, hexR, hexS) {
  if (checkDartRuntime()) {
    const result = execSync(`dart ${modulePath}/sym-tools-cli.dill recover ${hexMessage} ${hexV} ${hexR} ${hexS}`);
    // console.log(`result: ${result}`);
    const resultString = result.toString('utf8');
    return JSON.parse(resultString);
  } else {
    throw new Error("Dart runtime not found");
  }
}

function recoverFromRawTx(hexRawTx) {
  if (checkDartRuntime()) {
    const result = execSync(`dart ${modulePath}/sym-tools-cli.dill recoverFromRawTx ${hexRawTx}`);
    // console.log(`result: ${result}`);
    const resultString = result.toString('utf8');
    return JSON.parse(resultString);
  } else {
    throw new Error("Dart runtime not found");
  }
}

// utils
function toValueString(hexValue, srcRadix, dstRadix) {
  if (checkDartRuntime()) {
    const result = execSync(`dart ${modulePath}/sym-tools-cli.dill toValueString ${hexValue} ${srcRadix} ${dstRadix}`);
    // console.log(`result: ${result}`);
    return result.toString('utf8');
  } else {
    throw new Error("Dart runtime not found");
  }
}

function stringToUtf8(str) {
  if (checkDartRuntime()) {
    const result = execSync(`dart ${modulePath}/sym-tools-cli.dill stringToUtf8 ${str}`);
    // console.log(`result: ${result}`);
    return result.toString('utf8');
  } else {
    throw new Error("Dart runtime not found");
  }
}

function utf8ToString(hexStr) {
  if (checkDartRuntime()) {
    const result = execSync(`dart ${modulePath}/sym-tools-cli.dill utf8ToString ${hexStr}`);
    // console.log(`result: ${result}`);
    return result.toString('utf8');
  } else {
    throw new Error("Dart runtime not found");
  }
}

function toRlp(hexParams) {
  if (checkDartRuntime()) {
    const result = execSync(`dart ${modulePath}/sym-tools-cli.dill toRlp ${hexParams}`);
    // console.log(`result: ${result}`);
    return result.toString('utf8');
  } else {
    throw new Error("Dart runtime not found");
  }
}

function pubkeyHash(hexPublicKey) {
  if (checkDartRuntime()) {
    const result = execSync(`dart ${modulePath}/sym-tools-cli.dill pubkeyHash ${hexPublicKey}`);
    // console.log(`result: ${result}`);
    return result.toString('utf8');
  } else {
    throw new Error("Dart runtime not found");
  }
}

exports.hahser = {
  hashMessage: hashMessage,
  combineMessage: combineMessage
}
exports.transaction = {
  composeSendTransaction: composeSendTransaction,
  composeSct: composeSct,
  composeSct20Transfer: composeSct20Transfer,
  composeSct21Transfer: composeSct21Transfer,
  composeSct22Transfer: composeSct22Transfer,
  parseRawTx: parseRawTx,
  parseSct: parseSct,
  recover: recover,
  recoverFromRawTx: recoverFromRawTx
}
exports.utils = {
  toValueString: toValueString,
  stringToUtf8: stringToUtf8,
  utf8ToString: utf8ToString,
  toRlp: toRlp,
  pubkeyHash: pubkeyHash
}
