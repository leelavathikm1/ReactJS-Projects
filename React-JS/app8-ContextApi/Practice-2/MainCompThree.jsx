import React, { Component } from "react";
import { DataAccessProvider } from "./ContextCompThree";
import ChildCompThree from "./ChildCompThree";
export default class MainCompThree extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "Data From Main Component",
    };
  }
  render() {
    return (
      <div>
        <DataAccessProvider value={this.state}>
          <ChildCompThree />
        </DataAccessProvider>
      </div>
    );
  }
}
