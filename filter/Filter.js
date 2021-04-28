"use strict";

let Filter = React.createClass({

    displayname: 'filterComponent',

    getDefaultProps: function () {
        return { list: 'there are no words to filter' };
    },

    getInitialState: function () {
        return {
            renderList: this.props.list,
            currentList: this.props.list,
            isSorted: false,
            textInputValue: '',
        }
    },

    inputWasChanged: function (event) {
        let currValue = event.target.value;
        let filtredArray = this.props.list.filter(element => element.includes(currValue));
        this.setState((currState, props) => {
            return {
                renderList: currState.isSorted ? filtredArray.sort() :
                    filtredArray,
                currentList: filtredArray,
                textInputValue: currValue,
            }
        })
    },

    checkboxWasChanged: function (event) {
        this.setState((currState) => { return { isSorted: !currState.isSorted } })
        if (event.target.checked) this.setState((currState) => { return { renderList: currState.renderList.slice(0).sort() }; })
        else this.setState((currState) => { return { renderList: currState.currentList }; })
    },

    buttonWasClicked: function () {
        this.setState(() => { return { isSorted: false, textInputValue: '', renderList: this.props.list } })
    },

    render: function () {

        let arrToRender = this.state.renderList.map((element, index) => React.DOM.option({ key: index }, element));

        return React.DOM.div({ className: 'reactContainer' },
            React.DOM.div(null,
                React.DOM.input({ type: 'checkbox', onChange: this.checkboxWasChanged, checked: this.state.isSorted }),
                React.DOM.input({ onChange: this.inputWasChanged, value: this.state.textInputValue }),
                React.DOM.button({ type: 'button', onClick: this.buttonWasClicked }, 'sbros')),
            React.DOM.select({ size: '3' }, arrToRender),
        )
    }
})