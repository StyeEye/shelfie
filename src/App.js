import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import Product from "./Components/Product/Product";

class App extends Component {
  constructor() {
    super();

    // const tempTestData = [
    //   {
    //     name: "Test",
    //     image: "https://www.placecage.com/400/400",
    //     price: 2
    //   },
    //   {
    //     name: "Test 2",
    //     image: "https://www.placecage.com/500/400",
    //     price: 2
    //   },
    //   {
    //     name: "A true man",
    //     image: "https://www.placecage.com/700/700",
    //     price: 2
    //   }
    // ]

    this.state = {
      inventory: [],
      editId: null
    }
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

  editProduct = (id) => {
    this.setState({
      editId: id
    });
  }

  componentDidMount() {
    this.refreshInventory();
  }

  render() {
    const targetProduct = this.state.inventory.find(e => e.id === this.state.editId);

    return (
      <div className="App">
        <Header />
          <Form refreshFunc={this.refreshInventory} target={targetProduct} />
          <Dashboard inventory={this.state.inventory} refreshFunc={this.refreshInventory}
            editFunc={this.editProduct} />
        </div>
    );
  }
}

export default App;
