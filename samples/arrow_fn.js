module.exports = `
var sayHello = function() {
    return 'Hi my name is ' + first + '' + last;
};

console.log(sayHello());

var toUpperCase = function(str) {
    return str.toUpperCase();
};

console.log(toUpperCase('vaibhav'));

var items = function(arr) {
    return arr.map(function(item) {
        return item * 2;
    });
};
`
