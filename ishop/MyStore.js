let MyStore = React.createClass({

    displayName: 'MyStore',

    getDefaultProps: function () {
        return { goods: 'We have nothing at the time' }
    },

    render: function () {

        let myGoods = [];
        this.props.goods.forEach(function (item) {
            myGoods.push(React.DOM.tr({ key: item.id },
                React.DOM.td(null, item.name),
                React.DOM.td(null, item.price + '$'),
                React.DOM.td(null, 
                    React.DOM.a({href:item.photoURL}, item.photoURL)),
                React.DOM.td(null, item.remainder + ' pairs'),
            ));
        });
        return React.DOM.div(null,
            React.DOM.span(null, `Welcome to store "${this.props.name}". Here our goods`),
            React.DOM.table({ className: 'MyStoreClass' },
                React.DOM.tbody(null, myGoods))
        );
    },
})