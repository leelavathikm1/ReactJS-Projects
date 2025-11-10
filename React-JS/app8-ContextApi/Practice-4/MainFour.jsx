import React, { Component } from "react";
import ChildFour from "./ChildFour";
import { UserWishesProvider } from "./ContextCompFour";

export default class MainFour extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wishes: "Wishes From Main Component",
    };
  }
  render() {
    return (
      <div>
        <UserWishesProvider value={this.state}>
          <ChildFour />
        </UserWishesProvider>
      </div>
    );
  }
}
