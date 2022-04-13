

import React, { Component } from "react";
import Counter from "./components/counter";
import Footer from "./components/footer";
import Headers from "./components/Header";
import img from "./bb.jpg"

class App extends Component {
  state = {
    productArray: [
      {
        id: 1,
        details: "Berry",
        src: "https://images.unsplash.com/photo-1613265304208-c7d4ef7c90b5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=roy-javier-0iyd4NFbTuY-unsplash.jpg&w=640",
        price: "$10.09",
        value: 1,
        totalPrice: "",
      },
      {
        id: 2,
        details: "Shoe",
        src: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=821&q=80",
        price: "$14.09",
        value: 2,
        totalPrice: "",
      },
      {
        id: 3,
        details: "Handbag",
        src: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=creative-headline-APNnyM36puU-unsplash.jpg&w=640",
        price: "$19.09",
        value: 3,
        totalPrice: "",
      },
      {
        id: 4,
        details: "Wristwatch",
        src: "https://images.unsplash.com/photo-1610395219791-21b0353e43cb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=haziq-jb-71_GA1KBf_8-unsplash.jpg&w=640",
        price: "$18.09",
        value: 4,
        totalPrice: "",
      },
    ],
  };

  handleIncrement = (counterID) => {
    const sameArray = [...this.state.productArray];

    const index = sameArray.indexOf(counterID);
    sameArray[index] = { ...counterID };
    sameArray[index].value++;
    this.setState({ productArray: sameArray });
  };

  handleDecrement = (counterID) => {
    const sameArray = [...this.state.productArray];

    const index = sameArray.indexOf(counterID);
    sameArray[index] = { ...counterID };
    sameArray[index].value--;
    this.setState({ productArray: sameArray });
  };

  handleDelete = (counterId) => {
    const deleteArray = this.state.productArray.filter(
      (c) => c.id !== counterId
    );
    this.setState({ productArray: deleteArray });
  };

  handleReset = () => {
    const resetArrayFunction = this.state.productArray.map((resetArray) => {
      resetArray.value = 0;
      return resetArray;
    });
    this.setState({ productArray: resetArrayFunction });
  };

  render() {
    return (
      <div>
        <Headers
          totalCount={this.state.productArray.filter((c) => c.value > 0).length}
        />
        <Counter
          newAppProductArray={this.state.productArray}
          onReset={this.handleReset}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
