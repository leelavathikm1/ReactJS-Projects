import React, { Component } from "react";
import { DataAccessConsumer } from "./ContextCompThree";
export default class ChildCompThree extends Component {
  render() {
    return (
      <div>
        <DataAccessConsumer>
          {(value) => {
            console.log(value);
            return (
              <div>
                <h2>{value.data}</h2>
              </div>
            );
          }}
        </DataAccessConsumer>
      </div>
    );
  }
}
