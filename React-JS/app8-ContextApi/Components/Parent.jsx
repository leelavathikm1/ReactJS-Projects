import React, { Component } from "react";
import { UserContextConsumer } from "./ContextDemo";

export default class Parent extends Component {
  render() {
    return (
      <div id="parentDiv">
        {/* <Child person={this.props.person} /> */}
        <hr />
        {/* <UserContextConsumer>
          {(val) => {
            return;
            <ul>
              {val.map((obj, index) => {
                return Object.values(obj).map((v) => <li key={v}>{v}</li>);
              })}
            </ul>;
          }}
        </UserContextConsumer> */}

        <UserContextConsumer>
          {(value) => {
            return (
              <div>
                <span>{value.message}</span>
                <ul>
                  <li>{value.person.fname}</li>
                  <li>{value.person.lname}</li>
                </ul>
                <hr />
                {value.users.map((val, index) => {
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
        </UserContextConsumer>
      </div>
    );
  }
}
