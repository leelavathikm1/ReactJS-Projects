import React, { Component } from "react";
import { UserWishesConsumer } from "./ContextCompFour";

export default class ChildFour extends Component {
  render() {
    return (
      <div>
        <UserWishesConsumer>
          {(sendWishes) => {
            console.log(sendWishes);
            return (
              <div>
                <h3>{sendWishes.wishes}</h3>
              </div>
            );
          }}
        </UserWishesConsumer>
      </div>
    );
  }
}
