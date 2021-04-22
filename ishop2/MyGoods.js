let MyGoods = React.createClass({

    displayName: 'myGoods',

    propTypes: {
        goods: React.PropTypes.array.isRequired
    },

    getInitialState: function () {
        return {
            goodsList: this.props.goods,
        }
    },

    itemSelected: function (event) {
        let id = event.target.parentElement.id;
        this.props.cbItemSelected(id);
    },

    buttonClicked: function (event) {
        event.stopPropagation();
        let id = event.target.parentElement.parentElement.id;
        let pos = this.state.goodsList.findIndex((elem) => elem.id == id);
        if(confirm('are you sure?')) this.setState((currState, props) => { currState.goodsList.splice(pos, 1) });
        else return;
    },

    render: function () {

        let myGoods = [];
        this.state.goodsList.forEach((item) => {
            myGoods.push(React.DOM.tr({
                key: item.id, id: item.id, onClick: this.itemSelected,
                className: item.id == this.props.selectedItem ? 'selectedItem' : null
            },
                React.DOM.td(null, item.name),
                React.DOM.td(null, item.price + '$'),
                React.DOM.td(null,
                    React.DOM.a({ href: item.photoURL }, item.photoURL)),
                React.DOM.td(null, item.remainder + ' pairs'),
                React.DOM.td(null,
                    React.DOM.button({ type: 'button', onClick: this.buttonClicked }, 'delete'))
            ));
        });
        return React.DOM.table({ className: 'MyStoreClass' },
            React.DOM.tbody(null, myGoods))
    }
})
