import React, { Component } from "react";

export default class HandleCounterTwo extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  incrementCount = () => {
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
        {this.props.render(
          this.state.count,
          this.incrementCount,
          this.decrementCount,
          this.resetCount
        )}
      </div>
    );
  }
}
