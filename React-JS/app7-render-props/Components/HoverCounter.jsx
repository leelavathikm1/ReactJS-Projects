import React, { Component } from "react";

export default class HoverCounter extends Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       count: 0,
  //     };
  //   }

  //   incrementCount = () => {
  //     this.setState({ count: this.state.count + 1 });
  //   };
  //   decrementCount = () => {
  //     this.setState({ count: this.state.count - 1 });
  //   };
  //   resetCount = () => {
  //     this.setState({ count: 0 });
  //   };
  render() {
    const { count, incrementCount, decrementCount, resetCount } = this.props;
    return (
      <div>
        <button onMouseOver={incrementCount}>Increment</button>
        <button onMouseOver={decrementCount}>Decrement</button>
        <button onMouseOver={resetCount}>Reset</button>
        <p>Count: {count}</p>
      </div>
    );
  }
}
