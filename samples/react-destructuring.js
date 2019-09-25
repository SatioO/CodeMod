/**
 * Note: It will extract out props and destructure them all
 */

import React from 'react';

class C extends React.Component() {
    render() {
        return <div foo={this.props.foo} bar={this.props.bar} />;
    }
}
