module.exports = `
/**
 * Note: apply all the codemods
 */

import { one } from './a';
import { two } from './a';
import { three } from './a';

var x = 15 * 5;
debugger;
document.getElementbyId("demo").innerHTML = x;

const foo = 'Hello';
debugger;
const bar = 'World';
var baz = function(a, b, c) {
    debugger;
    return 'Easy as ' + a + b + c;
};

module.exports.foo = foo;
module.exports.bar = bar;
exports.baz = baz;
`
