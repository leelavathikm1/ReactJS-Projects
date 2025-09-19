import React, { Component } from "react";

export default class ClickCounter extends Component {
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
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
        <button onClick={resetCount}>Reset</button>
        <p>Count:{count}</p>
      </div>
    );
  }
}
