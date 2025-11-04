import React, { Component } from "react";

export default class ClickComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  incremntCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrementCount = () => {
    this.setState({ count: this.state.count - 1 });
  };

  resetCount = () => {
    this.setState({ count: 0 });
  };
  render() {
    return (
      <div>
        <button onClick={this.incremntCount}>IncrementCount</button>
        <button onClick={this.decrementCount}>DecrementCount</button>
        <button onClick={this.resetCount}>ResetCount</button>
        <h2>Count: {this.state.count}</h2>
      </div>
    );
  }
}
