/**
 * Note: It will extract out props and destructure them all
 */

module.exports = `
import React from 'react';

class C extends React.Component() {
    constructor() {
        this.onClick = this.onClick.bind(this);
        this.onMove = this.onMove.bind(this);
    }

    onClick() {}
    onMove() {}
    
    render() {
        return <div foo={this.props.foo} bar={this.props.bar} />;
    }
}
`
