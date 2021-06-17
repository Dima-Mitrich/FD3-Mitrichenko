import React from 'react';
import {mobileEvents} from './event';

class FilterBtns extends React.PureComponent {

    showActive = () => {
        mobileEvents.emit('showActive');
    }

    showBlocked = () => {
        mobileEvents.emit('showBlocked');
    }

    showAll = () => {
        mobileEvents.emit('showAll')
    }

    render () {
        return (
            <div>
                <button onClick={this.showAll} id='allBtn'>Все</button>
                <button onClick={this.showActive} id='activeBtn'>Активные</button>
                <button onClick={this.showBlocked} id='blockedBtn'>Заблокированные</button>
            </div>
        )
    }
}

export function pow2 (x) {
    return x*2;
}

export default FilterBtns;