module.exports = `
import { one } from './a';
import { two } from './a';
import { three } from './a';

var a = 10;
a = 20;

var b = 40;

console.log(b);

module.exports.one = one;
module.exports.two = two;
exports.three = three;
`
