const symTools = require('.');

console.log(`=== [Hasher] ===`);

let _message = "f84a8a00032dd1fa260e2a000281bd85174876e80083011e688aaca4414a37d7a6dc43e58098d71501d48a000232c721024cdd0002880de0b6b3a764000001cb8a0002537dc9a64d35000280";
let _v = "0x0";
let _r = "0x0df37aa532758d3e54230335c37b54ae2c39b77635d253d05ae3f62bd25562c3";
let _s = "0x5aab63b9011624f8863987757b5c318fc38b40b82d1c48f12d4bfd0a3c9ad7cd";

console.log(`Hasher.hashMessage(withOut ChainID)`);
result = symTools.hasher.hashMessage(_message);
console.log(JSON.stringify(result, null, 4));

console.log(`Hasher.hashMessage(with ChainID)`);
result = symTools.hasher.hashMessage(_message, "0x2");
console.log(JSON.stringify(result, null, 4));

console.log(`Hasher.combineMessage(withOut ChainID)`);
result = symTools.hasher.combineMessage(_message, _v, _r, _s);
console.log(JSON.stringify(result, null, 4));

console.log(`Hasher.combineMessage(with ChainID)`);
result = symTools.hasher.combineMessage(_message, _v, _r, _s, "0x2");
console.log(JSON.stringify(result, null, 4));
