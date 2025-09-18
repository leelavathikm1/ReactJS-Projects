import React, { Component } from "react";
import RenderChild from "./RenderChild";

export default class RenderParent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <h2>Welcome To User Component </h2>
        <hr />
        <RenderChild
          count={this.state.count}
          handleIncrement={this.incrementCount}
        />
      </div>
    );
  }
}
