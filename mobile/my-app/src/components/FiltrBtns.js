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
        console.log('render filter buttons component')
        return (
            <div>
                <button onClick={this.showAll}>Все</button>
                <button onClick={this.showActive}>Активные</button>
                <button onClick={this.showBlocked}>Заблокированные</button>
            </div>
        )
    }
}

export default FilterBtns;