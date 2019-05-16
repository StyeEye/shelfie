import React, { Component } from 'react';
import Product from "../Product/Product";

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const products = this.props.inventory.map(
            (e, i) => <Product key={i} item={e}/>
        );
        return (
            <div>
                {products}
            </div>
        )
    }
}
