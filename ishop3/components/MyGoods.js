import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

class MyItem extends React.Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        remainder: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        cbDeleteItem: PropTypes.func.isRequired,
        cbSelectItem: PropTypes.func.isRequired,
    };

    itemSelected = (event) => {
        this.props.cbSelectItem(this.props.id);
    }

    deleteButtonClicked = (event) => {
        event.stopPropagation();
        this.props.cbDeleteItem(this.props.id);
    }

    editButtonClicked = (event) => {
        event.stopPropagation();
        this.props.cbEditItem(this.props.id);
    }

    render() {
        return (
            <tr id={this.props.id} onClick={this.props.editNow ? null : this.itemSelected} className={this.props.className}>
                <td>{this.props.name}</td>
                <td>{this.props.price + '$'}</td>
                <td>
                    <a href={this.props.url}>{this.props.url}</a>
                </td>
                <td>{this.props.remainder + ' pairs'}</td>
                <td>
                    <button disabled={this.props.editNow} type='button' onClick={this.deleteButtonClicked}
                        id={this.props.id}>delete</button>
                    <button disabled={this.props.editNow} type='button' onClick={this.editButtonClicked}>edit</button>
                </td>
            </tr>

        );
    }
}

export default MyItem;
