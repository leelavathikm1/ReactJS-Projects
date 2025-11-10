import React, { Component } from "react";

export default class HoverComp extends Component {
  render() {
    const { count, increase, decrease, reset } = this.props;
    return (
      <div>
        <button onMouseOver={increase}>Increase</button>
        <button onMouseOver={decrease}>Decrease</button>
        <button onMouseOver={reset}>Reset</button>
        <p>Count:{count}</p>
      </div>
    );
  }
}
