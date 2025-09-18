import React, { Component } from "react";

export default class HoverCounter extends Component {
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
        <button onMouseOver={this.handleIncrement}>Handle Increment</button>
        <button onMouseOver={this.handleDecrement}>Handle decrement</button>
        <button onMouseOver={this.handleRest}>Reset</button>
        <h2>Count:{this.state.count}</h2>
      </div>
    );
  }
}
