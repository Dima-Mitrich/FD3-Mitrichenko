"use strict";

import React from 'react';

function withRainbowFrame(colors) {
    return function (Component) {
        return (
            class RainbowFrame extends React.Component {

                render() {

                    let code = <Component {...this.props} />;
                    colors.forEach(color =>
                        code = <div style={{ border: `solid 4px ${color}`, padding: '10px' }}>
                            {code}
                        </div>)

                    return (
                        code
                    );
                }

            }
        )
    }
}

export { withRainbowFrame };
