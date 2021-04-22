let MyStore = React.createClass({

    displayName: 'MyStore',

    propTypes: {
        name: React.PropTypes.string.isRequired,
        goods: React.PropTypes.array.isRequired,
    },

    getInitialState: function () {
        return {
            selectedItem: null,
        }
    },

    itemWasSelected: function (id) {
        this.setState(() => { return { selectedItem: id } })
    },

    render: function () {
        return React.DOM.div(null,
            React.DOM.span(null, this.props.name),
            React.createElement(MyGoods, {
                goods: this.props.goods, cbItemSelected: this.itemWasSelected,
                selectedItem: this.state.selectedItem,
            })
        );
    },
})