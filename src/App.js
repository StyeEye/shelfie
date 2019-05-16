import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import Product from "./Components/Product/Product";

class App extends Component {
  constructor() {
    super();

    const tempTestData = [
      {
        name: "Test",
        image: "https://www.placecage.com/400/400",
        price: 2
      },
      {
        name: "Test 2",
        image: "https://www.placecage.com/500/400",
        price: 2
      },
      {
        name: "A true man",
        image: "https://www.placecage.com/700/700",
        price: 2
      }
    ]

    this.state = {
      inventory: tempTestData
    }
  }

  render() {
    return (
      <div className="App">
        <Dashboard inventory={this.state.inventory}/>
        <Form />
        <Header />
      </div>
    );
  }
}

export default App;
