import React, { Component } from "react";

export default class LifeCycleDemo extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello",
      users: [],
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log(props, state);
    if (props.age <= 18) {
      return { message: "You are Teanager" };
    } else if (props.age > 18 && props.age <= 58) {
      return { message: "You are Adult" };
    } else {
      return { message: "Senior Citizen" };
    }

    return null;
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <ul>
          {this.state.users.map((usr, i) => {
            return <li key={i}>{usr.name}</li>;
          })}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    // alert("ima from componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((rawData) => {
        return rawData.json();
      })
      .then((response) => {
        console.log(response);
        this.setState({ users: response });
      });
  }
}
