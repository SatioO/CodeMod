const noVars = require('./no-vars')
const rmConsole = require('./rm-console')
const objectShortHand = require('./object-shorthand')
const templateLiterals = require('./template-literals')
const rmDebugger = require('./rmdebugger')
const convertToArrow = require('./convert-to-arrow')
const reactDestructuring = require('./react-destructuring')
const reactBind = require('./react-bind')
const rmBind = require('./rmbind')
const exportsV = require('./exports')
const cleanImport = require('./import-cleanup')
const fnToClass = require('./fn-to-class')

module.exports = [
  { id: 'noVars', mode: noVars, value: require('../../samples/no_vars') },
  {
    id: 'objectShortHand',
    mode: objectShortHand,
    value: require('../../samples/object_shorthand')
  },
  {
    id: 'templateLiterals',
    mode: templateLiterals,
    value: require('../../samples/template_literals')
  },
  {
    id: 'rmDebugger',
    mode: rmDebugger,
    value: require('../../samples/apply_all')
  },
  {
    id: 'convertToArrow',
    mode: convertToArrow,
    value: require('../../samples/arrow_fn')
  },
  {
    id: 'rmConsole',
    mode: rmConsole,
    value: require('../../samples/apply_all')
  },
  { id: 'rmBind', mode: rmBind, value: require('../../samples/apply_all') },
  {
    id: 'exportsV',
    mode: exportsV,
    value: require('../../samples/clean_exports')
  },
  {
    id: 'cleanImport',
    mode: cleanImport,
    value: require('../../samples/clean_import')
  },
  {
    id: 'fnToClass',
    mode: fnToClass,
    value: require('../../samples/fn_to_class')
  },
  {
    id: 'reactDestructuring',
    mode: reactDestructuring,
    value: require('../../samples/react-destructuring')
  },
  {
    id: 'reactRmBind',
    mode: reactBind,
    value: require('../../samples/react-rm-bind')
  }
]
