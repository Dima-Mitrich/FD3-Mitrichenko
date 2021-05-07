"use strict";

import React from 'react';
import PropTypes, { element, func } from 'prop-types';

class RainbowFrame extends React.Component {

    static propTypes = {
        colors: PropTypes.array.isRequired,
    };

    render() {

        let div = <div style={{ border: `solid 4px ${this.props.colors[this.props.colors.length - 1]}`, padding: '10px' }}
        children={this.props.children} />

        for (let i = this.props.colors.length - 2; i >= 0; i--) {
            div = <div style={{ border: `solid 4px ${this.props.colors[i]}`, padding: '10px' }}
            children={div} />
        }

        return (
            div
        );
    }

}

export default RainbowFrame;