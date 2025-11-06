import React, { Component } from "react";

export default class HoverOne extends Component {
  render() {
    const { count, increment, decrement, reset } = this.props;
    return (
      <div>
        <button onMouseOver={increment}>Increment</button>
        <button onMouseOver={decrement}>Decrement</button>
        <button onMouseOver={reset}>Reset</button>
        <p>{count}</p>
      </div>
    );
  }
}
