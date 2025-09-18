import React, { Component } from "react";
import UserUmountComp from "./UserUmountComp";

export default class ChildComp extends Component {
  constructor() {
    super();
    this.state = {
      message: "",
      info: "",
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps trigged");
    if (props.count > 51) {
      return { message: "Value is lessthen 50" };
    } else {
      return { message: "Value is Greater Then 50" };
    }

    return null;
  }
  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
      <div>
        <h2>{this.props.count}</h2>
        <h3>{this.state.message}</h3>
        {this.props.count <= 50 && <UserUmountComp />}
      </div>
    );
  }
  getSnapshotBeforeUpdate(props, state) {
    console.log(this.props, state);
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    if (prevState.info !== "Component Value Updated") {
      this.setState({ info: "Component Value Updated" });
    }
  }
}
