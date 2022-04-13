import React, { Component } from "react";
import Body from "./body";
import "./style.css";

class Counter extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="productTitle">
            <h6>Products</h6>
            <button onClick={this.props.onReset} className="reset">
              Reset
            </button>
          </div>

          {this.props.newAppProductArray.map((newProductArray) => (
            <Body
              key={newProductArray.id}
              newProductArray={newProductArray}
              onDelete={this.props.onDelete}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Counter;
