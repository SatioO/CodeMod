/**
 * Note: It is able to convert var to let or const based on assignment of the variable. As a is being
 * reassigned, it is smartly replaceing it with `let` and as b is never reassigned, it gets
 * replaced with const
 */
var a = 10;
a = 20;

var b = 40;

console.log(b);
