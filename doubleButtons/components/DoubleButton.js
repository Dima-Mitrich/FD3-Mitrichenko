"use strict";

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

class DoubleButton extends React.Component {

    static propsTypes = {
        caption1: PropTypes.string.isRequired,
        caption2: PropTypes.string.isRequired,
    }

    pressedButtnOne = () => {
        this.props.cbPressed(1);
    }

    pressedButtnTwo = () => {
        this.props.cbPressed(2);
    }

    render() {
        return (
            <Fragment>
                <input type='button' value={this.props.caption1} onClick={this.pressedButtnOne} />
                {this.props.children}
                <input type='button' value={this.props.caption2} onClick={this.pressedButtnTwo} />
            </Fragment>
        )
    }
}

export default DoubleButton;