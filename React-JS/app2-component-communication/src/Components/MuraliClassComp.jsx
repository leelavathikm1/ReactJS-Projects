import { Component } from "react";
import LeelaClassComp from "./LeelaClassComp";

class MuraliClassComp extends Component {
  //this is called as state in parent component

  constructor() {
    super();
    this.state = {
      message: "Welcome to MuraliClassComp from Parent",
    };
  }
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <hr />
        <LeelaClassComp />
      </div>
    );
  }
}

export default MuraliClassComp;
