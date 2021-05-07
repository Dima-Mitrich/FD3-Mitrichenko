"use strict";

import React from 'react';
import PropTypes from 'prop-types';

class Br2jsx extends React.Component {
    render() {
        let string = this.props.string;
        let regExp = /<br>&<br\/>/g;
        let newStr = string.split(regExp)
        return (
            <div>
                {newStr}
            </div>
        )
    }
}

export default Br2jsx;