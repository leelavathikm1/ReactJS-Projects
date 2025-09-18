import React, { Component } from "react";
import HocOneComp from "./HocOneComp";

class ClickTwo extends Component {
  render() {
    const { count, clickIncrement, clickDecrement, clickReset } = this.props;
    return (
      <div>
        <button onClick={clickIncrement}>Increment</button>
        <button onClick={clickDecrement}>Decrement</button>
        <button onClick={clickReset}>Reset</button>
        <h2>Count:{count}</h2>
      </div>
    );
  }
}
export default HocOneComp(ClickTwo);
