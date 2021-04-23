let MyItem = React.createClass({

    displayName: 'myItem',

    propTypes: {
        name: React.PropTypes.string.isRequired,
        price: React.PropTypes.number.isRequired,
        url: React.PropTypes.string.isRequired,
        remainder: React.PropTypes.number.isRequired,
        id: React.PropTypes.number.isRequired,
        cbDeleteItem: React.PropTypes.func.isRequired,
        cbSelectItem: React.PropTypes.func.isRequired,
    },

    itemSelected: function (event) {
        this.props.cbSelectItem(this.props.id);
    },

    buttonClicked: function (event) {
        event.stopPropagation();
        let id = event.target.id;
        this.props.cbDeleteItem(id);
    },

    render: function () {

        return React.DOM.tr({
            id: this.props.id, onClick: this.itemSelected, className: this.props.className
        },
            React.DOM.td(null, this.props.name),
            React.DOM.td(null, this.props.price + '$'),
            React.DOM.td(null,
                React.DOM.a({ href: this.props.url }, this.props.url)),
            React.DOM.td(null, this.props.remainder + ' pairs'),
            React.DOM.td(null,
                React.DOM.button({ type: 'button', onClick: this.buttonClicked, id: this.props.id }, 'delete'))
        );
    }
})
