import React, { Fragment, useState } from 'react';
import MyItem from './MyGoods';
import ItemList from './ItemList'

import './MyStore.css';

/*class MyStore extends React.Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        goods: PropTypes.array.isRequired,
    }

    state = {
        selectedItem: null,
        itemsList: this.props.goods,
        mode: null,
        itemIsEditing: false,
    }

    itemWasSelected = (id) => {
        let item = this.state.itemsList.find(elem => elem.id == id);
        this.setState(() => {
            return {
                selectedItem: item,
                mode: 'view'
            }
        })
    }

    deleteItem = (id) => {
        if (confirm('are you sure?')) {
            let arr = this.state.itemsList.filter(elem => elem.id != id);
            this.setState({ itemsList: arr });
        }
    }

    editItem = (id) => {
        let item = this.state.itemsList.find(elem => elem.id == id);
        this.setState(() => {
            return {
                selectedItem: item,
                mode: 'edit',
            }
        })
    }

    saveChanges = (params) => {
        let item = this.state.itemsList.find(elem => elem.id == params.id);
        item.name = params.name;
        item.price = params.price;
        item.photoURL = params.url;
        item.remainder = params.remainder;
        this.setState(() => { return { mode: null, itemIsEditing: false } });
    }

    cancelChanges = () => {
        this.setState(() => { return { mode: null, itemIsEditing: false } })
    }

    itemWasChanged = () => {
        this.setState({ itemIsEditing: true })
    }

    newItemCreate = () => {
        this.setState({ mode: 'new', itemIsEditing: true, selectedItem: null })
    }

    itemWasCreated = (params) => {
        let currentList = this.state.itemsList;
        let newItem = {
            name: params.name,
            price: params.price,
            photoURL: params.url,
            remainder: params.remainder,
            id: currentList[currentList.length - 1].id + 1
        }
        currentList.push(newItem);
        this.setState({ itemsList: currentList, mode: null, itemIsEditing: false })
    }

    render() {

        let arr = this.state.itemsList.map(element =>
            <MyItem
                name={element.name}
                price={element.price}
                url={element.photoURL}
                remainder={element.remainder}
                id={element.id}
                key={element.id}
                cbDeleteItem={this.deleteItem}
                cbSelectItem={this.itemWasSelected}
                cbEditItem={this.editItem}
                editNow={this.state.itemIsEditing}
                className={this.state.selectedItem && this.state.selectedItem.id == element.id ? 'selectedItem' : null}
            />
        )

        return (
            <Fragment>
                <div>
                    <span>{this.props.name}</span>
                    <table className='MyStoreClass'>
                        <tbody>{arr}</tbody>
                    </table>
                    <button type='button' onClick={this.newItemCreate}
                        disabled={this.state.mode && this.state.mode != 'view' ? true : false}>New item</button>
                </div>
                {
                    (this.state.mode) && <ItemList mode={this.state.mode}
                        name={this.state.selectedItem ? this.state.selectedItem.name : ''}
                        price={this.state.selectedItem ? this.state.selectedItem.price : ''}
                        remainder={this.state.selectedItem ? this.state.selectedItem.remainder : ''}
                        url={this.state.selectedItem ? this.state.selectedItem.photoURL : ''}
                        id={this.state.selectedItem ? this.state.selectedItem.id : null}
                        cbSaveChanges={this.saveChanges}
                        cbCancelChanges={this.cancelChanges}
                        cbItemWasChanged={this.itemWasChanged}
                        cbItemWasCreated={this.itemWasCreated} />
                }
            </Fragment>
        );
    }
}*/


function MyStore(props) {

    const [selectedItem, setSelectedItem] = useState(null);
    const [itemsList, setItemsList] = useState(props.goods);
    const [mode, setMode] = useState(null);
    const [itemIsEditing, setEditingMode] = useState(false);

    let deleteItem = (id) => {
        if (window.confirm('are you sure?')) {
            let arr = itemsList.filter(elem => elem.id !== id);
            setItemsList(arr);
        }
    }

    let itemWasSelected = (id) => {
        let item = itemsList.find(elem => elem.id === id);
        setSelectedItem(item);
        setMode('view');
    }

    let editItem = (id) => {
        let item = itemsList.find(elem => elem.id === id);
        setSelectedItem(item);
        setMode('edit')
    }

    let arr = itemsList.map(element =>
        <MyItem
            name={element.name}
            price={element.price}
            url={element.photoURL}
            remainder={element.remainder}
            id={element.id}
            key={element.id}
            cbDeleteItem={deleteItem}
            cbSelectItem={itemWasSelected}
            cbEditItem={editItem}
            editNow={itemIsEditing}
            className={selectedItem && selectedItem.id === element.id ? 'selectedItem' : null}
        />
    )

    let newItemCreate = () => {
        setMode('new');
        setEditingMode(true);
        setSelectedItem(null);
    }

    let saveChanges = (params) => {
        let item = itemsList.find(elem => elem.id === params.id);
        item.name = params.name;
        item.price = params.price;
        item.photoURL = params.url;
        item.remainder = params.remainder;

        setMode(null);
        setEditingMode(false);
    }

    let cancelChanges = () => {
        setMode(null);
        setEditingMode(false);
    }

    let itemWasChanged = () => {
        setEditingMode(true);
    }

    let itemWasCreated = (params) => {
        let currentList = itemsList;
        let newItem = {
            name: params.name,
            price: params.price,
            photoURL: params.url,
            remainder: params.remainder,
            id: currentList[currentList.length - 1].id + 1
        }
        currentList.push(newItem);
        setItemsList(currentList);
        setMode(null);
        setEditingMode(false);
    }

    return (
        <Fragment>
            <div>
                <span>{props.name}</span>
                <table className='MyStoreClass'>
                    <tbody>{arr}</tbody>
                </table>
                <button type='button' onClick={newItemCreate}
                    disabled={mode && mode !== 'view' ? true : false}>New item</button>
            </div>
            {
                (mode) && <ItemList mode={mode}
                    name={selectedItem ? selectedItem.name : ''}
                    price={selectedItem ? selectedItem.price : ''}
                    remainder={selectedItem ? selectedItem.remainder : ''}
                    url={selectedItem ? selectedItem.photoURL : ''}
                    id={selectedItem ? selectedItem.id : null}
                    cbSaveChanges={saveChanges}
                    cbCancelChanges={cancelChanges}
                    cbItemWasChanged={itemWasChanged}
                    cbItemWasCreated={itemWasCreated} />
            }
        </Fragment>
    );
}

export default MyStore;