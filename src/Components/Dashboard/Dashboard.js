import React, { Component } from 'react';
import Product from "../Product/Product";
import "./Dashboard.css";
import axios from "axios";

export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inventory: []
        };
    }

    componentDidMount() {
        this.refreshInventory();
    }

    refreshInventory = () => {
        axios.get("/api/inventory")
          .then(response => {
            const cleaned = response.data
              .map(e => {
                return {
                  name: e.product_name,
                  image: e.product_image,
                  price: Number(e.price),
                  id: parseInt(e.id)
                };
              });
            console.dir(cleaned)
            this.setState({
              inventory: cleaned
            });
          });
      }

    render() {
        const products = this.state.inventory.map(
            (e, i) => <Product key={i} item={e} refreshFunc={this.refreshInventory}
                editFunc={this.props.editFunc} history={this.props.history} />
        );
        return (
            <div className="dashboard">
                {products}
            </div>
        )
    }
}
