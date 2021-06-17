import React from 'react';

import Client from './Client';
import { mobileEvents } from './event';

class AbonentsContainer extends React.PureComponent {

    state = {
        mtsClients: this.props.mtsClients,
        currentClients: this.props.mtsClients,
        creatingNewClient: false,
    }

    componentDidMount() {
        mobileEvents.addListener('saveChanges', this.clientWasChanged);
        mobileEvents.addListener('deleteClient', this.deleteUser);
        mobileEvents.addListener('showActive', this.showActive);
        mobileEvents.addListener('showBlocked', this.showBlocked);
        mobileEvents.addListener('showAll', this.showAll);
    }

    componentWillUnmount() {
        mobileEvents.removeListener('saveChanges', this.clientWasChanged);
        mobileEvents.removeListener('deleteClient', this.deleteUser);
        mobileEvents.removeListener('showActive', this.showActive);
        mobileEvents.removeListener('showBlocked', this.showBlocked);
        mobileEvents.removeListener('showAll', this.showAll);
    }

    clientWasChanged = (changes) => {
        let currentUser = this.state.currentClients.find(elem => elem.id === changes.id);
        Object.assign(currentUser, changes);
    }

    deleteUser = (id) => {
        let z = this.state.mtsClients.filter(elem => elem.id !== id);
        this.setState({ currentClients: z, mtsClients: z });
    }

    showActive = () => {
        let filtredArr = this.state.mtsClients.filter(elem => elem.ballance >= 0);
        this.setState({ currentClients: filtredArr })
    }

    showBlocked = () => {
        let filtredArr = this.state.mtsClients.filter(elem => elem.ballance < 0);
        this.setState({ currentClients: filtredArr });
    }

    showAll = () => {
        this.setState({ currentClients: this.state.mtsClients });
    }

    addNewUser = () => {
        this.setState({ creatingNewClient: true })
    }

    saveNewUser = () => {
        let newUser = {
            name: this.nameRef.current.value, lastName: this.lastNameRef.current.value,
            middleName: this.middleNameRef.current.value, ballance: this.ballanceRef.current.value,
        }

        newUser.id = this.state.mtsClients[this.state.mtsClients.length - 1].id + 1;
        let newArr = [...this.state.mtsClients, newUser];
        this.setState({ mtsClients: newArr, currentClients: newArr, creatingNewClient: false });
    }

    cancelAddNewUser = () => {
        this.setState({ creatingNewClient: false });
    }

    nameRef = React.createRef();
    lastNameRef = React.createRef();
    middleNameRef = React.createRef();
    ballanceRef = React.createRef();

    render() {

        let currArr = this.state.currentClients.map((elem) =>
            <Client clientInfo={elem} key={elem.id} />)

        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Фамилия</th>
                            <th>Имя</th>
                            <th>Отчество</th>
                            <th>Баланс</th>
                            <th>Статус</th>
                            <th>Редактировать</th>
                            <th>Удалить</th>
                        </tr>
                        {
                            currArr
                        }
                        {
                            this.state.creatingNewClient && (
                                <tr>
                                    <td><input type='text' ref={this.nameRef} /></td>
                                    <td><input type='text' ref={this.lastNameRef} /></td>
                                    <td><input type='text' ref={this.middleNameRef} /></td>
                                    <td><input type='number' ref={this.ballanceRef} /></td>
                                    <td> </td>
                                    <td><button onClick={this.saveNewUser}>Сохранить</button></td>
                                    <td><button onClick={this.cancelAddNewUser}>Отмена</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <button onClick={this.addNewUser}>Добавить клиента</button>
            </div>
        )
    }
}

export default AbonentsContainer;