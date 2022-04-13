import React, { Component } from "react";
import "./style.css";

class Header extends Component {
  render() {
    return (
        <div className="header">
             
        <h2>Shopping Cart</h2>

        <div className="right-nav">
          <h6>Selected Items</h6>
          <span>{this.props.totalCount}</span>
        </div>
      
     
        </div>
    

      
    );
  }
}

export default Header;
