import React, { Component } from "react";
import Datacount from "./datacount";
import "./style.css";

class TotalCounts extends Component {
  render() {
    return (
      <div className="counts">
        <button onClick={this.props.onReset} className="text-color-primary">
          Reset
        </button>
        {this.props.countersTATE.map((count) => (
          <Datacount
            key={count.id}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onDelete={this.props.onDelete}
            count={count}
          />
        ))}
      </div>
    );
  }
}


export default TotalCounts;
