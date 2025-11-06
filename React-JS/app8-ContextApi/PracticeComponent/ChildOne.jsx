import React, { Component } from "react";
import { UserContextConsumer } from "./ContextOne";

export default class ChildOne extends Component {
  render() {
    return (
      <div>
        <h2>
          <UserContextConsumer>
            {(values) => {
              console.log("ChildOne ->", values);
            }}
          </UserContextConsumer>
        </h2>
      </div>
    );
  }
}
