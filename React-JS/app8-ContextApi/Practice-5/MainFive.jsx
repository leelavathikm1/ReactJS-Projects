import React, { Component } from "react";
import { EndUserMessageProvider } from "./ContextFive";
import ChildFive from "./ChildFive";

export default class MainFive extends Component {
  constructor(props) {
    super(props);

    this.state = {
      endUserMsg: "EndUser Message From Main Component",
    };
  }
  render() {
    return (
      <div>
        <EndUserMessageProvider value={this.state.endUserMsg}>
          <ChildFive />
        </EndUserMessageProvider>
      </div>
    );
  }
}
