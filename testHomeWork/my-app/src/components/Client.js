import React from 'react';
import { mobileEvents } from './event';

class Client extends React.PureComponent {

    state = {
        mode: 'show',
    }

    setMode = () => {
        this.setState({ mode: 'edit' });
    }

    saveChanges = () => {
        let changes = {
            name: this.nameRef.current.value, lastName: this.lastNameRef.current.value, middleName: this.middleNameRef.current.value,
            ballance: this.ballanceRef.current.value, id: this.props.clientInfo.id
        }
        mobileEvents.emit('saveChanges', changes)
        this.setState({ mode: 'show' });
    }

    deleteClient = () => {
        if (window.confirm('are you sure?')) mobileEvents.emit('deleteClient', this.props.clientInfo.id);
    }

    cancelEdit = () => {
        this.setState({ mode: 'show' })
    }

    nameRef = React.createRef();
    lastNameRef = React.createRef();
    middleNameRef = React.createRef();
    ballanceRef = React.createRef();

    render() {

        return (
            <tr>
                <td>
                    {
                        this.state.mode === 'show' ?
                            this.props.clientInfo.name :
                            <input type='text' defaultValue={this.props.clientInfo.name} ref={this.nameRef} />
                    }
                </td>
                <td>
                    {
                        this.state.mode === 'show' ?
                            this.props.clientInfo.lastName :
                            <input type='text' defaultValue={this.props.clientInfo.lastName} ref={this.lastNameRef} />
                    }
                </td>
                <td>
                    {
                        this.state.mode === 'show' ?
                            this.props.clientInfo.middleName :
                            <input type='text' defaultValue={this.props.clientInfo.middleName} ref={this.middleNameRef} />
                    }
                </td>
                <td>
                    {
                        this.state.mode === 'show' ?
                        this.props.clientInfo.ballance :
                        <input type='number' defaultValue={this.props.clientInfo.ballance} ref={this.ballanceRef} />
                    }
                </td>
                <td>
                    {
                        this.props.clientInfo.ballance >= 0 ? 'active' : 'blocked'
                    }
                </td>
                <td>
                    {
                        this.state.mode === 'show' ?
                            <button onClick={this.setMode} id='editBtn'>??????????????????????????</button> :
                            <button onClick={this.saveChanges} id='saveChngBtn'>??????????????????</button>
                    }
                </td>
                <td>
                    {
                        this.state.mode === 'show' ?
                            <button onClick={this.deleteClient} id='deleteBtn'>??????????????</button> :
                            <button onClick={this.cancelEdit} id='cancelChngBtn'>????????????</button>
                    }
                </td>
            </tr>
        )
    }

}

export default Client; 