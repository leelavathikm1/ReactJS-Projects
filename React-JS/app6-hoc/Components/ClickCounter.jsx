import React, { Component } from "react";

export default class ClickCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  handleRest = () => {
    this.setState({ count: 0 });
  };

  render() {
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
