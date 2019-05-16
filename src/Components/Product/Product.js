import React, { Component } from 'react';

export default class Product extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {name, image, price} = this.props.item;

        return (
            <div>
                <img src={image} alt="No image"/>
                <h1>{name}</h1>
                <h2>{price}</h2>
            </div>
        )
    }
}
