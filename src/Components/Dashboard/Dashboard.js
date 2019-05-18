import React, { Component } from 'react';
import Product from "../Product/Product";
import "./Dashboard.css";

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const products = this.props.inventory.map(
            (e, i) => <Product key={i} item={e} refreshFunc={this.props.refreshFunc}
                editFunc={this.props.editFunc} />
        );
        return (
            <div className="dashboard">
                {products}
            </div>
        )
    }
}
