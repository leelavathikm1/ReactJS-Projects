import React, { Component } from "react";
import { UserContextProvider } from "./ContextOne";

export default class MainOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello From Main Component",
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
      <div>
        <UserContextProvider value={this.state.message}></UserContextProvider>
      </div>
    );
  }
}
