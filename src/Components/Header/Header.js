import React, { Component } from 'react';
import "./Header.css";
import icon from "./shelfie_icon.png";

export default class Header extends Component {
    render() {
        return (
            <div className="custom-header">
                <img src={icon} className="header-image"/>
                <h1>SHELFIE</h1>
            </div>
        )
    }
}
