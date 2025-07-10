import { Component } from "react";

class User extends Component {
  // Declaring a string , Object & Array Indide a state Object
  state = {
    message: "Welcome To ReactJs Class Component", // creating a astring

    person: {
      fName: "Leela",
      lName: "KM",
      email: "leelakm@gmail.com",
    },

    flowers: ["Jasmine", "Rose", "Hybiscus", "Mariegold"],
  };

  render() {
    return (
      <div>
        {/* Binding a string */}
        <h2>{this.state.message}</h2>
        {/* <ul>
          <li>{this.state.person.fName}</li>
          <li>{this.state.person.lName}</li>
          <li>{this.state.person.email}</li>
        </ul> */}

        {/* Binding An Object */}
        <ul>
          {Object.values(this.state.person).map((val, i) => {
            return <li key={i}>{val}</li>;
          })}
        </ul>

        {/* Binding an Array */}
        <ul>
          {this.state.flowers.map((val, i) => {
            return <li key={i}>{val}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default User;
