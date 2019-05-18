import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

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

  editProduct = (id) => {
    this.setState({
      editId: id
    });
  }

  render() {
    const targetProduct = this.state.inventory.find(e => e.id === this.state.editId);

    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/add" component={Form} />
            <Route path="/edit/:id" component={Form}/>} />
            <Route path="/" component={Dashboard} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
