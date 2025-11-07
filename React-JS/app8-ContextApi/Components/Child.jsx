import React, { Component } from "react";
import { UserContextConsumer } from "./ContextDemo";

export default class Child extends Component {
  render() {
    return (
      <div id="childDiv">
        {/* This process is called props drill down */}
        <h4>This process is called props drill down</h4>
        {/* <ul>
          <li>{this.props.person.fname}</li>
          <li>{this.props.person.lname}</li>
        </ul> */}
        <hr />
        <h4>This is Context API</h4>
        <UserContextConsumer>
          {/* {(val) => {
            <ul>
              {val.map((obj) => {
                return Object.values(obj).map((v) => <li key={v}>{v}</li>);
              })}
            </ul>;
          }} */}
        </UserContextConsumer>
      </div>
    );
  }
}
