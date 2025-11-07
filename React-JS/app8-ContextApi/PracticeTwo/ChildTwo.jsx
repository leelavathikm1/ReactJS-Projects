import React, { Component } from "react";
import { PeopleContextConsumer } from "./ContextTwo";

export default class ChildTwo extends Component {
  render() {
    return (
      <div>
        <p>Iam From Child Component</p>
        <PeopleContextConsumer>
          {(value) => {
            return (
              <div>
                {/* console.log(value); */}
                <h2>{value.message}</h2>
                {value.users.map((val, index) => {
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
