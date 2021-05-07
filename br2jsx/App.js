'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Br2jsx from './components/Br2jsx'

let string = "первый<br>второй<br/>третий<br />последний"

ReactDOM.render(<Br2jsx string={string}/>, document.getElementById('mainContainer'))