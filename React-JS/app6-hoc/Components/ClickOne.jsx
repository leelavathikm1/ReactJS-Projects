import React, { Component } from "react";
import HocComponent from "./HocComponent";
import ClickCounter from "./ClickCounter";

class ClickOne extends Component {
  render() {
    const { count, handleIncrement, handleDecrement, handleRest } = this.props;
    return (
      <div>
        <button onClick={handleIncrement}>Handle Increment</button>
        <button onClick={handleDecrement}>Handle decrement</button>
        <button onClick={handleRest}>Reset</button>
        <h2>Count:{count}</h2>
      </div>
    );
  }
}
export default HocComponent(ClickCounter);
