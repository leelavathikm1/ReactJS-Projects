import React, { Component } from "react";
import HocComp from "./HocComp";

class ClickComp extends Component {
  render() {
    const { count, increase, decrease, reset } = this.props;
    return (
      <div>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
        <p>Count: {count}</p>
      </div>
    );
  }
}

export default HocComp(ClickComp);
