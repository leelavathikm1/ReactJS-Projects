import React, { Component } from "react";
import HocComponent from "./HocComponent";

class HoverComponent extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     count: 0,
  //   };
  // }

  // incrementCount = () => {
  //   this.setState({ count: this.state.count + 1 });
  // };
  // decrementCount = () => {
  //   this.setState({ count: this.state.count - 1 });
  // };
  // resetCount = () => {
  //   this.setState({ count: 0 });
  // };

  render() {
    const { count, incrementCount, decrementCount, resetCount } = this.props;
    return (
      <div>
        <button onMouseOver={incrementCount}>IncrementCount</button>
        <button onMouseOver={decrementCount}>DecrementCount</button>
        <button onMouseOver={resetCount}>ResetCount</button>
        <h2>Count : {count}</h2>
      </div>
    );
  }
}
export default HocComponent(HoverComponent);
