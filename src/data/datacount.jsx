import React, { Component } from "react";
import "./style.css";

class Datacount extends Component {
  //   state = {
  //     value: this.props.count.value,
  //   };

  //   handleIncrement = () => {
  //     this.setState({ value: this.props.count.value + 1 });
  //   };

  //   handleDecrement = () => {
  //     this.setState({ value: this.props.count.value - 1 });
  //   };

  textColor = () => {
    let colorr = "text-color";
    colorr += this.props.count.value < 0 ? "-danger" : "-primary";
    return colorr;
  };
 
  render() {
    return (
      <div className="counts">
        <span className={this.textColor()}>{this.props.count.value}</span>
        <button onClick={() => this.props.onIncrement(this.props.count)}>
          Increment
        </button>
        <button
          className="btn-danger"
          onClick={() => this.props.onDecrement(this.props.count)}
        >
          Decrement
        </button>

        <button onClick={() => this.props.onDelete(this.props.count.id)}>
          Delete
        </button>
      </div>
    );
  }
}

export default Datacount;
