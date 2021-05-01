import React from 'react';
import PropTypes from 'prop-types';
import DOM from 'react-dom-factories';

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

    buttonClicked = (event) => {
        event.stopPropagation();
        let id = event.target.id;
        this.props.cbDeleteItem(id);
    }

    render() {
        return (
            <tr id={this.props.id} onClick={this.itemSelected} className={this.props.className}>
                <td>{this.props.name}</td>
                <td>{this.props.price + '$'}</td>
                <td>
                    <a href={this.props.url}>{this.props.url}</a>
                </td>
                <td>{this.props.remainder + ' pairs'}</td>
                <td>
                    <button type='button' onClick={this.buttonClicked} id={this.props.id}>delete</button>
                </td>
            </tr>
        );
    }
}

export default MyItem;
