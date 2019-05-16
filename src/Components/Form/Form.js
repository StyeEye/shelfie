import React, { Component } from 'react';

export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            image: "",
            price: 0
        }
    }

    nameChanged = (event) => {
        this.setState({
            name: event.target.value
        });
        console.log("Name changed");
    }

    imageChanged = (event) => {
        this.setState({
            image: event.target.value
        });
    }

    priceChanged = (event) => {
        this.setState({
            price: event.target.value
        });
    }

    cancel = () => {
        this.setState({
            name: "",
            image: "",
            price: 0
        });
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.name} onInput={this.nameChanged} placeholder="Name" />
                <input type="url" value={this.state.image} onInput={this.imageChanged} placeholder="http://" />
                <input type="text" value={this.state.price} onInput={this.priceChanged} />
                <button onClick={this.cancel}>Cancel</button>
                <button>Update</button>
            </div>
        )
    }
}
