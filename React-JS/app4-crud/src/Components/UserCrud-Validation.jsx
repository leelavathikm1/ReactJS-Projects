import { Component } from "react";

class UserCrudValidation extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        name: "",
        email: "",
      },

      users: [],
    };
  }

  handleChange = (e) => {
    const inputName = e.target.name;
    const enteredValue = e.target.value;
    const newUser = { ...this.state.user };
    newUser[inputName] = enteredValue;
    this.setState({ user: newUser });

    // console.log(inputName);
    // console.log(enteredValue);
    // console.log(newUser);
    // console.log(e);
  };

  handleSubmit = (e) => {
    const newUsers = [...this.state.users];
    newUsers.push(this.state.user);
    this.setState({ users: newUsers });
    // console.log(newUsers);
    this.handleReset();
  };

  handleReset = () => {
    const resetUser = {
      name: "",
      email: "",
    };
    this.setState({ user: resetUser });
  };

  render() {
    return (
      <div>
        <h2>Welcome to User Crud Validation</h2>
        <form>
          <label htmlFor="">Enter Name</label> <br />
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="">Enter email</label>
          <br />
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />{" "}
          <br />
          <button type="button" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
        <hr />
        <table border="1">
          <thead>
            <tr>
              <th>NAME</th>
              <th>E-Mail</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((usr, i) => {
              return (
                <tr key={i}>
                  <td>{usr.name}</td>
                  <td>{usr.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserCrudValidation;
