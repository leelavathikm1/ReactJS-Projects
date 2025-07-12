import React, { Component } from "react";

export default class UserClassComp extends Component {
  constructor() {
    super();
    this.state = {
      fName: "",
      lName: "",
    };
  }

  habdleChange = (e) => {
    // console.log({ [e.target.name]: e.target.value });
    // this.setState({ fName: e.target.value });
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    console.log(this.state);
  };

  render() {
    const { fName, lName } = this.state; // extrating fname lname by destructuring
    return (
      <div>
        <form>
          <label htmlFor="">First Name</label>
          <input
            type="text"
            name="fName"
            value={fName}
            onChange={this.habdleChange}
          />
          <br />
          <label htmlFor="">Last Name</label>
          <input
            type="text"
            name="lName"
            value={lName}
            onChange={this.habdleChange}
          />
          <br />
          <button type="button" onClick={this.handleSubmit}>
            Add User
          </button>
        </form>
      </div>
    );
  }
}
