import React, { Component } from "react";
import Parent from "./Parent";

export default class GrandParent extends Component {
  render() {
    return (
      <div id="grandParentDiv">
        <Parent person={this.props.person} />
      </div>
    );
  }
}
