"use strict";

import React from 'react';
import PropTypes, { element, func } from 'prop-types';

class RainbowFrame extends React.Component {

    static propTypes = {
        colors: PropTypes.array.isRequired,
    };

    render() {

        let code = this.props.children;
        this.props.colors.forEach(color =>
            code = <div style={{ border: `solid 4px ${color}`, padding: '10px' }}>
                {code}
            </div>)

        return (
            code
        );
    }

}

export default RainbowFrame;