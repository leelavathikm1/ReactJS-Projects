import React, { Component } from "react";

export default class RenderChild extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleIncrement}>Increment</button>
        <p>{this.props.count}</p>
      </div>
    );
  }
}
