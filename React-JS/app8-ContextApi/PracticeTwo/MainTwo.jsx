import React, { Component } from "react";
import { PeopleContextProvider } from "./ContextTwo";
import ChildTwo from "./ChildTwo";
import ParentTwo from "./ParentTwo";

export default class MainTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Message from MainTwo Component",

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
      <div>
        <PeopleContextProvider value={this.state}>
          <ChildTwo />
          <hr />
          <ParentTwo />
        </PeopleContextProvider>
      </div>
    );
  }
}
