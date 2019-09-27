module.exports = `
import { one } from './a';
import { two } from './a';
import { three } from './a';

function Controller(param1, param2) {
    const name = 'Vaibhav Satam';
    let age = 28;
}

Controller.prototype.name = 'Vaibhav';

Controller.prototype.contributeTo = function(param) {
    var foo = 'webpack';
};

Controller.staticMethod = function(param) {
    return [1, 2, 3].map(
        function(x) {
            return x * x;
        }.bind(this)
    );
};

Object.defineProperty(Controller.prototype, 'hello', {
    get: function() {
        return 'world';
    },
    set: function(name) {
        console.log('Do anything with ' + name);
    },
});

Object.defineProperty(Controller.prototype, 'lastname', {
    get: function() {
        return 'Satam';
    },
});

module.exports.one = one;
module.exports.two = two;
exports.three = three;
`
