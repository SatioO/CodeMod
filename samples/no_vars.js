/**
 * Note: It is able to convert var to let or const based on assignment of the variable. As a is being
 * reassigned, it is smartly replaceing it with `let` and as b is never reassigned, it gets
 * replaced with const
 */
module.exports = `
import { one } from './a';
import { two } from './a';
import { three } from './a';

var initialState = {
    bar: {},
    active: 0  
}

var reducer = function(state, action) {
    switch(action.type) {
        case 'SET_BAR':
            return {...state, bar: action.data}
            
        default:
            return state
    }
}

function GradientBar(props) {
    this.tiers = []

}

GradientBar.prototype.render = function() {
   return this.tiers.map((item) => "GradientBar Graph Chart" + this.active)
}

module.exports.one = one
module.exports.two = two
exports.three = three
`
