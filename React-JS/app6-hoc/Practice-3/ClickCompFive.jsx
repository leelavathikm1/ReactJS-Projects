import React, { Component } from "react";

export default class ClickCompFive extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increase = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrease = () => {
    this.setState({ count: this.state.count - 1 });
  };
  reset = () => {
    this.setState({ count: 0 });
  };
  render() {
    return (
      <div>
        <button onClick={this.increase}>Increase</button>
        <button onClick={this.decrease}>Decrease</button>
        <button onClick={this.reset}>Reset</button>
        <p> Count: {this.state.count}</p>
      </div>
    );
  }
}
