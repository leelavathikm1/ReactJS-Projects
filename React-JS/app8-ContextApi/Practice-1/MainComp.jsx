import React, { Component } from "react";
import { UserAccessProvider } from "./ContextComp";
import ChildComp from "./ChildComp";

export default class MainComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Coming From Main Component",
    };
  }

  render() {
    return (
      <div>
        <UserAccessProvider value={this.state}>
          <ChildComp />
        </UserAccessProvider>
      </div>
    );
  }
}
