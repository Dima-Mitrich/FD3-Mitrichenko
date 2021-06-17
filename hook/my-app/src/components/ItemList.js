import React, { useEffect, useState } from 'react';

import './ItemList.css'

/*class ItemList extends React.Component {

    static propTypes = {
        mode: PropTypes.string.isRequired,
        name: PropTypes.string,
        url: PropTypes.string,
        cbSaveChanges: PropTypes.func.isRequired,
        cbItemWasCreated: PropTypes.func.isRequired,
        cbItemWasChanged: PropTypes.func.isRequired,
        cbCancelChanges: PropTypes.func.isRequired,
    }

    state = {
        name: this.props.name,
        price: this.props.price,
        url: this.props.url,
        remainder: this.props.remainder,
        isNameIrrelevant: false,
        isPriceIrrelevant: false,
        isUrlIrrelevant: false,
        isRemainderIrrelevant: false,
        isEditing: false,
    }

    //при изменении товара меняем и стейт
    componentDidUpdate(prevProps) {
        if (prevProps.id !== this.props.id) this.setState({
            name: this.props.name,
            price: this.props.price,
            url: this.props.url,
            remainder: this.props.remainder,
        })
    }

    //валидация имени
    onChangeNameInput = (event) => {
        let currValue = event.target.value;
        if (!currValue || currValue.length > 15) this.setState(() => {
            return (
                { name: currValue, isNameIrrelevant: true, isEditing: true })
        });
        else this.setState(() => { return { name: currValue, isNameIrrelevant: false, isEditing: true } })
        this.props.cbItemWasChanged();
    }

    //валидация цены
    onChangePriceInput = (event) => {
        let currValue = event.target.value;
        if (isNaN(currValue) || !currValue) this.setState(() => {
            return (
                { price: currValue, isPriceIrrelevant: true, isEditing: true })
        });
        else this.setState(() => { return { price: currValue, isPriceIrrelevant: false, isEditing: true } });
        this.props.cbItemWasChanged();
    }

    //валидация урл
    onChangeUrlInput = (event) => {
        let urlRegExp = /^[www.]+([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/;
        let currValue = event.target.value;
        if (!urlRegExp.test(currValue) || !currValue) {
            this.setState(() => {
                return (
                    { url: currValue, isUrlIrrelevant: true, isEditing: true })
            });
        }
        else this.setState(() => { return { url: currValue, isUrlIrrelevant: false, isEditing: true } })
        this.props.cbItemWasChanged();
    }

    //валидация остатка
    onChangeRemainderInput = (event) => {
        let currValue = event.target.value;
        if (isNaN(currValue) || !currValue) this.setState(() => {
            return (
                { remainder: currValue, isRemainderIrrelevant: true, isEditing: true })
        });
        else this.setState(() => { return { remainder: currValue, isRemainderIrrelevant: false, isEditing: true } });
        this.props.cbItemWasChanged();
    }

    saveChanges = () => {
        let params = {
            name: this.state.name,
            price: parseFloat(this.state.price),
            url: this.state.url,
            remainder: parseFloat(this.state.remainder),
            id: this.props.id,
        }
        this.setState({ isEditing: false });
        this.props.cbSaveChanges(params);
    }

    saveNewItem = () => {
        let params = {
            name: this.state.name,
            price: parseFloat(this.state.price),
            url: this.state.url,
            remainder: parseFloat(this.state.remainder),
        }
        this.props.cbItemWasCreated(params)
    }

    cancelChanges = () => {
        this.setState({ isEditing: false });
        this.props.cbCancelChanges();
    }

    render() {
        if (this.props.mode === 'view') {
            return (
                <div>
                    <span>
                        <strong>{this.props.name}<br /></strong>
                    </span>
                    <span>{this.props.price + '$'}<br /></span>
                    <a href={this.props.url}>{this.props.url}<br /></a>
                    <span>{this.props.remainder + 'pairs'}<br /></span>
                </div>
            );
        } else {
            return (
                <div>
                    <span>Name:</span>
                    <input type='text'
                        value={this.state.name}
                        onChange={this.onChangeNameInput} />
                    {
                        (this.state.isNameIrrelevant) && <span className='ErrorMessage'> Error Valid</span>
                    }
                    <br />

                    <span>Price:</span>
                    <input type='text'
                        value={this.state.price}
                        onChange={this.onChangePriceInput} />
                    {
                        (this.state.isPriceIrrelevant) && <span className='ErrorMessage'> Error Valid</span>
                    }
                    <br />

                    <span>URL:</span>
                    <input type='text'
                        value={this.state.url}
                        onChange={this.onChangeUrlInput} />
                    {
                        (this.state.isUrlIrrelevant) && <span className='ErrorMessage'> Error Valid</span>
                    }
                    <br />

                    <span>Remainder:</span>
                    <input type='text'
                        value={this.state.remainder}
                        onChange={this.onChangeRemainderInput} />
                    {
                        (this.state.isRemainderIrrelevant) && <span className='ErrorMessage'> Error Valid</span>
                    }
                    <br />

                    <button onClick={this.props.mode === 'edit' ? this.saveChanges : this.saveNewItem}
                        disabled={this.state.isNameIrrelevant || this.state.isPriceIrrelevant ||
                            this.state.isRemainderIrrelevant || this.state.isUrlIrrelevant ||
                            !this.state.isEditing}>Save</button>
                    <button onClick={this.cancelChanges}>Cancel</button>
                </div>
            );
        }
    }
}*/


function ItemList(props) {

    const [name, setName] = useState(props.name);
    const [price, setPrice] = useState(props.price);
    const [url, setUrl] = useState(props.url);
    const [remainder, setRemainder] = useState(props.remainder);
    const [isNameIrrelevant, setRelevName] = useState(false);
    const [isPriceIrrelevant, setRelevPrice] = useState(false);
    const [isUrlIrrelevant, setRelevUrl] = useState(false);
    const [isRemainderIrrelevant, setRelevRemainder] = useState(false);
    const [isEditing, setEditMod] = useState(false);

    useEffect(() => {
        setName(props.name);
        setPrice(props.price);
        setUrl(props.url);
        setRemainder(props.remainder);
    }, [props.name, props.price, props.url, props.id, props.remainder]);

    let onChangeNameInput = (event) => {
        let currValue = event.target.value;
        if (!currValue || currValue.length > 15) {
            setName(currValue);
            setRelevName(true);
            setEditMod(true);
        }
        else {
            setName(currValue);
            setRelevName(false);
            setEditMod(true);
        }
        props.cbItemWasChanged();
    }

    let onChangePriceInput = (event) => {
        let currValue = event.target.value;
        if (isNaN(currValue) || !currValue) {
            setPrice(currValue);
            setRelevPrice(true);
            setEditMod(true);
        }
        else {
            setPrice(currValue);
            setRelevPrice(false);
            setEditMod(true);
        }
        props.cbItemWasChanged();
    }

    let onChangeUrlInput = (event) => {
        let urlRegExp = /^[www.]+([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/;
        let currValue = event.target.value;
        if (!urlRegExp.test(currValue) || !currValue) {
            setUrl(currValue);
            setRelevUrl(true);
            setEditMod(true);
        }
        else {
            setUrl(currValue);
            setRelevUrl(false);
            setEditMod(true);
        }
        props.cbItemWasChanged();
    }

    let onChangeRemainderInput = (event) => {
        let currValue = event.target.value;
        if (isNaN(currValue) || !currValue) this.setState(() => {
            setRemainder(currValue);
            setRelevRemainder(true);
            setEditMod(true);
        });
        else {
            setRemainder(currValue);
            setRelevRemainder(false);
            setEditMod(true);
        }
        props.cbItemWasChanged();
    }

    let saveChanges = () => {
        let params = {
            name: name,
            price: parseFloat(price),
            url: url,
            remainder: parseFloat(remainder),
            id: props.id,
        }
        setEditMod(false);
        props.cbSaveChanges(params);
    }

    let saveNewItem = () => {
        let params = {
            name: name,
            price: parseFloat(price),
            url: url,
            remainder: parseFloat(remainder),
        }
        props.cbItemWasCreated(params)
    }

    let cancelChanges = () => {
        setEditMod(false);
        props.cbCancelChanges();
    }

    return (
        props.mode === 'view' ?
            (
                <div>
                    <span>
                        <strong>{props.name}<br /></strong>
                    </span>
                    <span>{props.price + '$'}<br /></span>
                    <a href={props.url}>{props.url}<br /></a>
                    <span>{props.remainder + 'pairs'}<br /></span>
                </div>
            )
            :
            (
                <div>
                    <span>Name:</span>
                    <input type='text'
                        value={name}
                        onChange={onChangeNameInput} />
                    {
                        (isNameIrrelevant) && <span className='ErrorMessage'> Error Valid</span>
                    }
                    <br />

                    <span>Price:</span>
                    <input type='text'
                        value={price}
                        onChange={onChangePriceInput} />
                    {
                        (isPriceIrrelevant) && <span className='ErrorMessage'> Error Valid</span>
                    }
                    <br />

                    <span>URL:</span>
                    <input type='text'
                        value={url}
                        onChange={onChangeUrlInput} />
                    {
                        (isUrlIrrelevant) && <span className='ErrorMessage'> Error Valid</span>
                    }
                    <br />

                    <span>Remainder:</span>
                    <input type='text'
                        value={remainder}
                        onChange={onChangeRemainderInput} />
                    {
                        (isRemainderIrrelevant) && <span className='ErrorMessage'> Error Valid</span>
                    }
                    <br />

                    <button onClick={props.mode === 'edit' ? saveChanges : saveNewItem}
                        disabled={isNameIrrelevant || isPriceIrrelevant ||
                            isRemainderIrrelevant || isUrlIrrelevant ||
                            !isEditing}>Save</button>
                    <button onClick={cancelChanges}>Cancel</button>
                </div>
            )
    )

}

export default ItemList;