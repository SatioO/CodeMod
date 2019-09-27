/**
 * Note: It is able to convert var to let or const based on assignment of the variable. As a is being
 * reassigned, it is smartly replaceing it with `let` and as b is never reassigned, it gets
 * replaced with const
 */
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
