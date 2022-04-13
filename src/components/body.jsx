import React, { Component } from "react";
import "./style.css";


class Body extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="items">
              <div className="top-nav">
                
                  <button onClick={ () => this.props.onDelete(this.props.newProductArray.id)} className="close">x</button>
              </div>
            <div className="image">
              <img src={this.props.newProductArray.src} alt="img" />
              <p>{this.props.newProductArray.details}</p>
            </div>

            <div className="left-actions">
              <span className="price">{this.props.newProductArray.price}</span>

              <div className="quantity">
                <button
                  onClick={() =>
                    this.props.onDecrement(this.props.newProductArray)
                  }
                >
                  -
                </button>
                <b className="unit">{this.props.newProductArray.value}</b>
                <button
                  onClick={() =>
                    this.props.onIncrement(this.props.newProductArray)
                  }
                >
                  +
                </button>
              </div>

             
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
