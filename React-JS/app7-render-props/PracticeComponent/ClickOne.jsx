import React, { Component } from "react";

export default class ClickOne extends Component {
  render() {
    const { count, increment, decrement, reset } = this.props;
    return (
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <p>Count: {count}</p>
      </div>
    );
  }
}
