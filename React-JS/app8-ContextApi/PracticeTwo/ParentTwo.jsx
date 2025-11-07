import React, { Component } from "react";
import { PeopleContextConsumer } from "./ContextTwo";
export default class ParentTwo extends Component {
  render() {
    return (
      <div>
        <p>Iam From Parent Component</p>
        <PeopleContextConsumer>
          {(receive) => {
            return (
              <div>
                <h2>{receive.message}</h2>
                {receive.users.map((val, index) => {
                  console.log(val);
                  return (
                    <ul key={index}>
                      {Object.values(val).map((v, i) => {
                        return <li key={i}>{v}</li>;
                      })}
                    </ul>
                  );
                })}
              </div>
            );
          }}
        </PeopleContextConsumer>
      </div>
    );
  }
}
