import React, { Component } from 'react';
import "./Header.css";
import icon from "./shelfie_icon.png";
import { Link } from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <div className="custom-header">
                <img src={icon} className="header-image"/>
                <h1>SHELFIE</h1>
                <Link to="/" className="nav-buttons">Dashboard</Link>
                <Link to="/add" className="nav-buttons">Add Inventory</Link>
            </div>
        )
    }
}
