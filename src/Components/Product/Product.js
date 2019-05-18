import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

    editProduct = () => {
        this.props.history.push(`/edit/${this.props.item.id}`)
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
                    <button onClick={this.editProduct} className="product-update">Edit</button>
                </div>
            </div>
        )
    }
}
