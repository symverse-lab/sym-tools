const symTools = require('.');

console.log(`=== [Transaction] ===`);

console.log(`Transaction.composeSendTransaction(withOut ChainID)`);
var result = symTools.transaction.composeSendTransaction(
  "0x00032dd1fa260e2a0002",
  "0xbd",
  "0x174876e800",
  "0x11e68",
  "0xaca4414a37d7a6dc43e5",
  "0x0",
  "0xd71501d48a000232c721024cdd0002880de0b6b3a7640000",
  "0x1",
  "0x0002537dc9a64d350002",
  "0x"
);
let unsignedTx = result.unsignedTx;
console.log(JSON.stringify(result, null, 4));

console.log(`Transaction.composeSendTransaction(with ChainID)`);
result = symTools.transaction.composeSendTransaction(
  "0x00032dd1fa260e2a0002",
  "0xbd",
  "0x174876e800",
  "0x11e68",
  "0xaca4414a37d7a6dc43e5",
  "0x0",
  "0xd71501d48a000232c721024cdd0002880de0b6b3a7640000",
  "0x1",
  "0x0002537dc9a64d350002",
  "0x",
  "0x2"
);
console.log(JSON.stringify(result, null, 4));

console.log(`Transaction.composeSct()`);
result = symTools.transaction.composeSct(21, "transfer", { "recipient": "0x00032dd1fa260e2a0002", "amount": "0x174876e800" });
let sctMethod = result.serialize;
console.log(JSON.stringify(result, null, 4));

console.log(`Transaction.composeSct20Transfer()`);
result = symTools.transaction.composeSct20Transfer("0x00032dd1fa260e2a0002", "0x174876e800");
console.log(JSON.stringify(result, null, 4));

console.log(`Transaction.composeSct21Transfer()`);
result = symTools.transaction.composeSct21Transfer("0x00032dd1fa260e2a0002", "0x174876e800");
console.log(JSON.stringify(result, null, 4));

console.log(`Transaction.composeSct22Transfer()`);
result = symTools.transaction.composeSct22Transfer("0x00032dd1fa260e2a0002", "0x174876e800");
console.log(JSON.stringify(result, null, 4));

console.log(`Transaction.parseRawTx()`);
result = symTools.transaction.parseRawTx(unsignedTx);
console.log(JSON.stringify(result, null, 4));

console.log(`Transaction.parseSct()`);
result = symTools.transaction.parseSct(sctMethod);
console.log(JSON.stringify(result, null, 4));

let _message = "0xf84a8a00032dd1fa260e2a000281bd85174876e80083011e688aaca4414a37d7a6dc43e58098d71501d48a000232c721024cdd0002880de0b6b3a764000001cb8a0002537dc9a64d35000280";
let _v = "0x0";
let _r = "0x0df37aa532758d3e54230335c37b54ae2c39b77635d253d05ae3f62bd25562c3";
let _s = "0x5aab63b9011624f8863987757b5c318fc38b40b82d1c48f12d4bfd0a3c9ad7cd";

console.log(`Transaction.recover(withOut ChainID)`);
result = symTools.transaction.recover(_message, _v, _r, _s);
console.log(JSON.stringify(result, null, 4));

console.log(`Transaction.recover(with ChainID)`);
result = symTools.transaction.recover(_message, _v, _r, _s, "0x2");
console.log(JSON.stringify(result, null, 4));

let _rawTx = "0xf88d8a00032dd1fa260e2a000281bd85174876e80083011e688aaca4414a37d7a6dc43e58098d71501d48a000232c721024cdd0002880de0b6b3a764000001cb8a0002537dc9a64d3500028080a00df37aa532758d3e54230335c37b54ae2c39b77635d253d05ae3f62bd25562c3a05aab63b9011624f8863987757b5c318fc38b40b82d1c48f12d4bfd0a3c9ad7cd";
console.log(`Transaction.recoverFromRawTx(withOut ChainID)`);
result = symTools.transaction.recoverFromRawTx(_rawTx);
console.log(JSON.stringify(result, null, 4));

console.log(`Transaction.recoverFromRawTx(with ChainID)`);
result = symTools.transaction.recoverFromRawTx(_rawTx, "0x2");
console.log(JSON.stringify(result, null, 4));
