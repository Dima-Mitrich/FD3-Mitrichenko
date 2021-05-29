import React from 'react';
import {mobileEvents} from './event';

class CompanyBtns extends React.PureComponent {

    state = {
        currentCompany: 'Velcom'
    }

    setVelcomeCompany = () => {
        mobileEvents.emit('companyNameHasBeenChanged', 'Velcom');
        this.setState({ currentCompany: 'Velcom' });
    }

    setMtsCompany = () => {
        mobileEvents.emit('companyNameHasBeenChanged', 'MTS');
        this.setState({ currentCompany: 'MTS' });
    }

    render() {
        console.log('render company buttons component')
        return (
            <div>
                <button onClick={this.setVelcomeCompany}>Velcom</button>
                <button onClick={this.setMtsCompany}>MTS</button><br />
                <span>{`Компания: ${this.state.currentCompany}`}</span>
            </div>
        )
    }
}

export default CompanyBtns;