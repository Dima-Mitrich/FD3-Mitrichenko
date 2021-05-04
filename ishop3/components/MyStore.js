import React, { Fragment } from 'react';
import MyItem from './MyGoods';
import PropTypes, { number } from 'prop-types';
import ItemList from './ItemList'

import './MyStore.css';

class MyStore extends React.Component {

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
                mode: 'edit'
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
}

export default MyStore;