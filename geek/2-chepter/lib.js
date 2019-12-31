exports.info = { name: 'Robbie', age: 18 }

console.log('module.exports: ', module.exports)
console.log('exports: ', exports);

console.log('---修改后---');
console.log('module.exports: ', module.exports)
exports.default = 100;
console.log('exports: ', exports);
