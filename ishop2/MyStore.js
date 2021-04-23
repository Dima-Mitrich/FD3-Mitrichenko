let MyStore = React.createClass({

    displayName: 'MyStore',

    propTypes: {
        name: React.PropTypes.string.isRequired,
        goods: React.PropTypes.array.isRequired,
    },

    getInitialState: function () {
        return {
            selectedItem: null,
            itemsList: this.props.goods,
        }
    },

    itemWasSelected: function (id) {
        this.setState(() => { return { selectedItem: id } })
    },

    deleteItem: function (id) {
        let pos = this.state.itemsList.findIndex((elem) => elem.id == id);
        if (confirm('are you sure?')) this.setState((currState) => { currState.itemsList.splice(pos, 1) });
    },

    render: function () {

        let arr = this.state.itemsList.map(element =>
            React.createElement(MyItem, {
                name: element.name, price: element.price, url: element.photoURL,
                remainder: element.remainder, id: element.id, key: element.id,
                cbDeleteItem: this.deleteItem, cbSelectItem: this.itemWasSelected,
                className: this.state.selectedItem == element.id ? 'selectedItem' : null,
            })
        )

        return React.DOM.div(null,
            React.DOM.span(null, this.props.name),
            React.DOM.table({ className: 'MyStoreClass' },
                React.DOM.tbody(null, arr)
            )
        );
    },
})