import React from 'react';
import MyItem from './MyGoods';
import PropTypes from 'prop-types';

import './MyStore.css';

class MyStore extends React.Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        goods: PropTypes.array.isRequired,
    }

    state = {
        selectedItem: null,
        itemsList: this.props.goods,
    }

    itemWasSelected = (id) => {
        this.setState(() => { return { selectedItem: id } })
    }

    deleteItem = (id) => {
        let arr = this.state.itemsList.filter(elem => elem.id != id);
        if (confirm('are you sure?')) this.setState({ itemsList: arr });
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
                className={this.state.selectedItem == element.id ? 'selectedItem' : null}
            />
        )

        return (
            <div>
                <span>{this.props.name}</span>
                <table className='MyStoreClass'>
                    <tbody>{arr}</tbody>
                </table>
            </div>
        );
    }
}

export default MyStore;