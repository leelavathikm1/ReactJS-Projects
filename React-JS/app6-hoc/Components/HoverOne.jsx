import React, { Component } from "react";
import HocComponent from "./HocComponent";

class HoverOne extends Component {
  render() {
    console.log(props);
    const { count, handleIncrement, handleDecrement, handleRest } = this.props;
    return (
      <div>
        <button onClick={this.handleIncrement}>Handle Increment</button>
        <button onClick={this.handleDecrement}>Handle decrement</button>
        <button onClick={this.handleRest}>Reset</button>
        <h2>Count:{this.state.count}</h2>
      </div>
    );
  }
}
export default HocComponent(HoverOne);
