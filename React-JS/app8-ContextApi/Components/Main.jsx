import React, { Component } from "react";
import GrandParent from "./GrandParent";
import { UserContextProvider } from "./ContextDemo";

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fname: "Leela",
        lname: "KM",
      },
      users: [
        {
          id: 1,
          name: "Alice",
          age: 25,
        },
        {
          id: 2,
          name: "Bob",
          age: 30,
        },
        {
          id: 3,
          name: "Charlie",
          age: 28,
        },
      ],
    };
  }
  render() {
    return (
      <div id="mainDiv">
        <UserContextProvider value={this.state.users}>
          <GrandParent person={this.state.person} />
        </UserContextProvider>
      </div>
    );
  }
}
