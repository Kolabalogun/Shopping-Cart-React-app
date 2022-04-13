import React, { Component } from "react";
import "./style.css";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <h3>Navbar </h3>
        <span className="saps">{this.props.totalCounters}</span>
      </div>
    );
  }
}

export default Navbar;
