import React, { Component } from "react";
import HocComponent from "./HocComponent";

class ClickComponent extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       count: 0,
  //     };
  //   }
  // incremntCount = () => {
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
        <button onClick={incrementCount}>IncrementCount</button>
        <button onClick={decrementCount}>DecrementCount</button>
        <button onClick={resetCount}>ResetCount</button>
        <h2>Count: {count}</h2>
      </div>
    );
  }
}

export default HocComponent(ClickComponent);
