import React, { Component } from "react";

export default class StudentClassComp extends Component {
  constructor() {
    super();
    this.state = {
      student: {
        fName: "",
        lName: "",
        email: "",
      },
    };
  }

  handleChange = (e) => {
    // console.log(e);

    const newStudent = { ...this.state.student };
    newStudent[e.target.name] = e.target.value;
    this.setState({ student: newStudent });
  };
  handleSubmit = () => {
    console.log(this.state.student);
  };

  render() {
    const { fName, lName, email } = this.state.student;
    return (
      <div>
        <form>
          <label htmlFor="">First Name :</label>
          <input
            type="text"
            name="fName"
            value={fName}
            onChange={this.handleChange}
          />{" "}
          <br />
          <br />
          <label htmlFor="">First Name :</label>
          <input
            type="text"
            name="lName"
            value={lName}
            onChange={this.handleChange}
          />{" "}
          <br />
          <br />
          <label htmlFor="">First Name :</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />{" "}
          <br />
          <br />
          <button type="button" onClick={this.handleSubmit}>
            Add User
          </button>
        </form>
      </div>
    );
  }
}
