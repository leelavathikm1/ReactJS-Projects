import React, { Component } from "react";

export default class LifeCycleHooksOne extends Component {
  constructor(props) {
    super(props);
    console.log("Welcome To Constructor");
    this.state = {
      message: "",
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("Iam From GetDerivedStateFromProps", props);

    return null;
  }

  componentDidMount() {
    console.log("Trigged from ComponentDidMount");
  }

  render() {
    console.log("Render Method trigged");
    return <div>LifeCycleHooksOne</div>;
  }
}
