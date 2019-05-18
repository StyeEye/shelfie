import React, { Component } from 'react';
import axios from 'axios';

import "./Product.css"

export default class Product extends Component {
    constructor(props) {
        super(props);
    }

    deleteProduct = () => {
        console.log(this.props.item)
        axios.delete(`/api/remove/${this.props.item.id}`)
            .then(response => {
                this.props.refreshFunc();
            });
    }

    render() {
        const {name, image, price} = this.props.item;

        return (
            <div className="product">
                <div className="product-image" style={{backgroundImage: `url(${image})`}}/>
                <div className="product-info">
                    <h2 className="product-name">{name}</h2>
                    <h3>{"$" + price}</h3>
                    <button onClick={this.deleteProduct} className="product-delete">Delete</button>
                    <button onClick={() => this.props.editFunc(this.props.item.id)} className="product-update">Edit</button>
                </div>
            </div>
        )
    }
}
