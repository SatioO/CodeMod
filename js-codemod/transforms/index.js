const noVars = require('./no-vars');
const rmConsole = require('./rm-console');
const objectShortHand = require('./object-shorthand');
const templateLiterals = require('./template-literals');
const rmDebugger = require('./rmdebugger');
const converToArrow = require('./convert-to-arrow');
const reactDestructuring = require('./react-destructuring');
const reactPureComponent = require('./react-purecomponent');
const reactBind = require('./react-bind');
const rmBind = require('./rmbind');
const exportsV = require('./exports');
const cleanImport = require('./import-cleanup');
const fnToClass = require('./fn-to-class');

module.exports = [
    { id: 'noVars', value: noVars },
    { id: 'objectShortHand', value: objectShortHand },
    { id: 'templateLiterals', value: templateLiterals },
    { id: 'rmDebugger', value: rmDebugger },
    { id: 'converToArrow', value: converToArrow },
    { id: 'rmConsole', value: rmConsole },
    { id: 'rmBind', value: rmBind },
    { id: 'exportsV', value: exportsV },
    { id: 'cleanImport', value: cleanImport },
    { id: 'fnToClass', value: fnToClass },
    { id: 'reactDestructuring', value: reactDestructuring },
    { id: 'reactRmBind', value: reactBind },
];
