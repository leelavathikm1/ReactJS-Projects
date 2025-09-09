import { Component } from "react";

export default class CrudValdTwo extends Component {
  state = {
    employee: {
      name: "",
      email: "",
      designation: "",
    },
    employees: [],
  };

  handleChange = (e) => {
    const inputName = e.target.name;
    const enteredValue = e.target.value;
    const newEmpName = { ...this.state.employee };
    newEmpName[inputName] = enteredValue;
    this.setState({ employee: newEmpName });
    console.log(inputName, enteredValue);
    console.log(newEmpName);
  };

  handleSubmit = () => {
    const newEmployees = [...this.state.users];
    newEmployees.push(this.state.employee);
    this.setState({ employees: newEmployees });
    console.log(newEmployees);
  };

  render() {
    return (
      <div>
        <form>
          <label htmlFor="name">Enter Name: </label>
          <br />
          <input
            type="text"
            name="name"
            value={this.state.employee.name}
            onChange={this.handleChange}
          />{" "}
          <br />
          <label htmlFor="email">Enter Email</label>
          <br />
          <input
            type="email"
            name="email"
            value={this.state.employee.email}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="designation">Designation</label>
          <br />
          <input
            type="text"
            name="designation"
            value={this.state.employee.designation}
            onChange={this.handleChange}
          />
          <br />
          <button type="submit" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
