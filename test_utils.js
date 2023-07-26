const symTools = require('.');

console.log(`=== [Utils] ===`);

console.log(`Utils.toValueString()`);
result = symTools.utils.toValueString("0x14", 16, 10);
console.log(result);

console.log(`Utils.stringToUtf8()`);
result = symTools.utils.stringToUtf8("문자열");
console.log(result);

console.log(`Utils.utf8ToString()`);
result = symTools.utils.utf8ToString(result);
console.log(result);

let _params = [
  "0x00032dd1fa260e2a0002",
  "0xaca4414a37d7a6dc43e5",
  "0x0002537dc9a64d350002"
];

console.log(`Utils.toRlp()`);
result = symTools.utils.toRlp(_params);
console.log(result);

let _pubKey = "0xe744ad9e5b9a27c921c73e0357efe21ea57701eaf225ee85502539daa9b85a6766b87a4376da3d40942594aa1d1a3cfa72ae476f48ff70d24dc101deac18bb0e";
console.log(`Utils.pubkeyHash()`);
result = symTools.utils.pubkeyHash(_pubKey);
console.log(result);
