import React, { Component } from "react";
// import GrandParent from "./GrandParent";
// import { UserContextConsumer } from "./ContextDemo";

export default class GrandParent extends Component {
  render() {
    return (
      <div id="grandParentDiv">
        {/* <Parent person={this.props.person} /> */}
        <UserContextConsumer>
          {(result) => {
            return (
              <div>
                <p>{result.message}</p>
              </div>
            );
          }}
        </UserContextConsumer>
      </div>
    );
  }
}
