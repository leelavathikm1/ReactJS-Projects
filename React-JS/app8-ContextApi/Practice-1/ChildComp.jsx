import React, { Component } from "react";
import { UserAccessConsumer } from "./ContextComp";

export default class ChildComp extends Component {
  render() {
    return (
      <div>
        <h2>From Child Comp</h2>
        <UserAccessConsumer>
          {(value) => {
            console.log(value);
          }}
        </UserAccessConsumer>
      </div>
    );
  }
}
