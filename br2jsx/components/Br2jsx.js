"use strict";

import React from 'react';
import PropTypes from 'prop-types';

class Br2jsx extends React.Component {

    static propsTypes = {
        string: PropTypes.string.isRequired,
    }
    render() {
        let string = this.props.string;
        let regExp = /<br\s*\/?>/g;
        let newArr = string.split(regExp);
        let parts = [];
        newArr.forEach((element, index) => {
            if (index !== 0) parts.push(<br key={index} />);
            parts.push(element);
        });
        return (
            <div>
                {parts}
            </div>
        )
    }
}

export default Br2jsx;