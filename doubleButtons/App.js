"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import DoubleButton from './components/DoubleButton';
import { withRainbowFrame } from './components/withRainbowFrame';

ReactDOM.render(
    <DoubleButton caption1='buttonOne' caption2='buttonTwo' cbPressed={(num) => { console.log(num) }}>HERE WE ARE</DoubleButton>,
    document.getElementById('mainContainer')
)

let colors = ['red', 'orange', 'yellow', 'green', '#00BFFF', 'blue', 'purple'];
let FramedButtons = withRainbowFrame(colors)(DoubleButton);

ReactDOM.render(
    <FramedButtons caption1='buttonOne' caption2='buttonTwo' cbPressed={(num) => { console.log(num) }}>NOW WE ARE HERE</FramedButtons>,
    document.getElementById('mainContainer1')
)