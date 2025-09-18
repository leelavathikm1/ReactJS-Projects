import React, { Component } from "react";
import HocOneComp from "./HocOneComp";

class HoverTwo extends Component {
  render() {
    const { count, clickIncrement, clickDecrement, clickReset } = this.props;
    return (
      <div>
        <button onMouseOver={clickIncrement}>Increment</button>
        <button onMouseOver={clickDecrement}>Decrement</button>
        <button onMouseOver={clickReset}>Reset</button>
        <h2>Count:{count}</h2>
      </div>
    );
  }
}
export default HocOneComp(HoverTwo);
