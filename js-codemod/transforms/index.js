const noVars = require('./no-vars');
const rmConsole = require('./rm-console');
const useStrict = require('./use-strict');
const objectShortHand = require('./object-shorthand');
const templateLiterals = require('./template-literals');
const rmRequires = require('./rm-requires');
const rmDebugger = require('./rmdebugger');
const converToArrow = require('./convert-to-arrow');
const reactDestructuring = require('./react-destructuring');
const rmBind = require('./rmbind');
const exportsV = require('./exports');
const cleanImport = require('./import-cleanup');
const fnToClass = require('./fn-to-class');
const unchainVariables = require('./unchain-variables');

module.exports = [
    { id: 'noVars', value: noVars },
    { id: 'objectShortHand', value: objectShortHand },
    { id: 'templateLiterals', value: templateLiterals },
    { id: 'rmDebugger', value: rmDebugger },
    { id: 'reactDestructuring', value: reactDestructuring },
    { id: 'converToArrow', value: converToArrow },
    { id: 'rmConsole', value: rmConsole },
    { id: 'rmBind', value: rmBind },
    { id: 'exportsV', value: exportsV },
    { id: 'cleanImport', value: cleanImport },
    { id: 'fnToClass', value: fnToClass },
];
