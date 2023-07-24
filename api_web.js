// hasher
function hashMessage(hexMessage) {
  if (window.hahser) {
    return window.hahser.hashMessage(hexMessage);
  } else {
    throw new Error("Hasher API not found");
  }
}

function combineMessage(hexMessage, hexV, hexR, hexS) {
  if (window.hahser) {
    return window.hahser.combineMessage(hexMessage, hexV, hexR, hexS);
  } else {
    throw new Error("Hasher API not found");
  }
}

// transaction
function composeSendTransaction(from, hexNonce, hexGasPrice, hexGasLimit, to, hexValue, hexData, hexType, warrantNode, hexExtraData) {
  if (window.transaction) {
    return window.transaction.composeSendTransaction(from, hexNonce, hexGasPrice, hexGasLimit, to, hexValue, hexData, hexType, warrantNode, hexExtraData);
  } else {
    throw new Error("Transaction API not found");
  }
}

function composeSct(sctType, methodName, params) {
  if (window.transaction) {
    return window.transaction.composeSct(sctType, methodName, params);
  } else {
    throw new Error("Transaction API not found");
  }
}

function composeSct20Transfer(recipient, amount) {
  if (window.transaction) {
    return window.transaction.composeSct20Transfer(recipient, amount);
  } else {
    throw new Error("Transaction API not found");
  }
}

function composeSct21Transfer(recipient, amount) {
  if (window.transaction) {
    return window.transaction.composeSct21Transfer(recipient, amount);
  } else {
    throw new Error("Transaction API not found");
  }
}

function composeSct22Transfer(recipient, amount) {
  if (window.transaction) {
    return window.transaction.composeSct22Transfer(recipient, amount);
  } else {
    throw new Error("Transaction API not found");
  }
}

function parseRawTx(rawTx) {
  if (window.transaction) {
    return window.transaction.parseRawTx(rawTx);
  } else {
    throw new Error("Transaction API not found");
  }
}

function parseSct(hexSctMethod) {
  if (window.transaction) {
    return window.transaction.parseSct(hexSctMethod);
  } else {
    throw new Error("Transaction API not found");
  }
}

function recover(hexMessage, hexV, hexR, hexS) {
  if (window.transaction) {
    return window.transaction.recover(hexMessage, hexV, hexR, hexS);
  } else {
    throw new Error("Transaction API not found");
  }
}

// utils
function toValueString(hexValue, srcRadix, dstRadix) {
  if (window.utils) {
    return window.utils.toValueString(hexValue, srcRadix, dstRadix);
  } else {
    throw new Error("Utils API not found");
  }
}

function stringToUtf8(str) {
  if (window.utils) {
    return window.utils.stringToUtf8(str);
  } else {
    throw new Error("Utils API not found");
  }
}

function utf8ToString(hexStr) {
  if (window.utils) {
    return window.utils.utf8ToString(hexStr);
  } else {
    throw new Error("Utils API not found");
  }
}

function toRlp(hexParams) {
  if (window.utils) {
    return window.utils.toRlp(hexParams);
  } else {
    throw new Error("Utils API not found");
  }
}

function utf8ToString(hexPublicKey) {
  if (window.utils) {
    return window.utils.pubkeyHash(hexPublicKey);
  } else {
    throw new Error("Utils API not found");
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
  recover: recover
}
exports.utils = {
  toValueString: toValueString,
  stringToUtf8: stringToUtf8,
  utf8ToString: utf8ToString,
  toRlp: toRlp,
  pubkeyHash: pubkeyHash
}
