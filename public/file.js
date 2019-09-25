module.exports = `
    import { one } from "./a"
    import { two } from "./a"
    import { three } from "./a"

    const first = 'Ashutosh', last = 'Bijoor';

    var sayHello = function() {
        debugger;
        return 'Hi my name is ' + first + "" + last;
    }

    console.log(sayHello())

    var toUpperCase = function (str){
        return str.toUpperCase()
    }

    console.log(toUpperCase("vaibhav"))

    var items = function(arr) {
        return arr.map(function(item) {
            return item * 2
        })
    }

    console.log(items)

    const foo = 'Hello';
    debugger;
    const bar = 'World';
    var baz = function(a, b, c) {
        debugger;
        return 'Easy as ' + a + b + c
    };

    module.exports.foo = foo
    module.exports.bar = bar
    exports.baz = baz
`;
