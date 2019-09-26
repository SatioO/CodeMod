module.exports = `
    const foo = 'Hello';
    const bar = 'World';
    var baz = function(a, b, c) {
        return 'Easy as ' + a + b + c;
    };

    module.exports.foo = foo;
    module.exports.bar = bar;
    exports.baz = baz;
`;
