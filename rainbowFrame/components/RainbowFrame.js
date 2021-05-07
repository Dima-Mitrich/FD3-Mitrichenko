"use strict";

import React from 'react';
import PropTypes, { element, func } from 'prop-types';

class RainbowFrame extends React.Component {

    static propTypes = {
        colors: PropTypes.array.isRequired,
    };

    render() {

        let arr = [];
        for (let i = 0; i < this.props.colors.length - 1; i++) {
            let div = <div style={{ border: `solid 4px ${this.props.colors[i]}`, padding: '10px' }}
                children={arr[i - 1] || this.props.children} />
            arr.push(div);
        }

        return (
            arr[arr.length - 1]
        );
    }

}

export default RainbowFrame;