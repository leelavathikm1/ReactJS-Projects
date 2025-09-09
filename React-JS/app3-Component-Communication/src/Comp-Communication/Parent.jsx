import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Parent Message Called From Child Component",
      names: ["Leela", "Kala", "Ram", "Hema"],
    };
  }

  changeMsgInParent = () => {
    this.setState({ message: "This parent Message Changed from child" });
  };
  render() {
    return (
      <div>
        <h2>Welcome To parent Component</h2>
        <hr />
        <button type="button" onClick={this.changeMsgInParent}>
          Click Button
        </button>

        <Child info={this.state.names} />
      </div>
    );
  }
}

export default Parent;
