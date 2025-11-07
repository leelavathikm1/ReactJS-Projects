import React, { Component } from "react";
import { UserContextConsumer } from "./ContextOne";

export default class ChildOne extends Component {
  render() {
    return (
      <div>
        <h2>
          <UserContextConsumer>
            {(contextState) => {
              return (
                <div>
                  <h2>{contextState.message}</h2>
                  {contextState.users.map((user, index) => {
                    return (
                      <ul key={index}>
                        {Object.values(user).map((val, i) => {
                          return <li key={i}>{val}</li>;
                        })}
                      </ul>
                    );
                  })}
                </div>
              );
            }}
          </UserContextConsumer>
        </h2>
      </div>
    );
  }
}
