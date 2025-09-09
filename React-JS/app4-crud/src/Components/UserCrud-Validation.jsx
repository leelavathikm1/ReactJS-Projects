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
      editIndex: null,
      isValid: false,
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
    const newUsers = {
      name: "",
      email: "",
    };
    this.setState({ user: newUsers });
  };

  handleEdit = (usr, i) => {
    this.setState({ user: usr, editIndex: i });
  };

  handleDelete = (usr) => {
    const newUsers = this.state.users.filter((u) => {
      return u.email !== usr.email;
    });
    this.setState({ users: newUsers });
  };

  handleUpdate = () => {
    const newUsers = [...this.state.users];
    newUsers[this.state.editIndex] = this.state.user;
    this.setState({ users: newUsers, editIndex: null });
    this.handleReset();
  };

  render() {
    return (
      <div>
        <h2>Welcome to User Crud Validation</h2>
        <form>
          <label htmlFor="name">Enter Name</label> <br />
          <input
            type="text"
            name="name"
            value={this.state.user.name}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="email">Enter email</label>
          <br />
          <input
            type="email"
            name="email"
            value={this.state.user.email}
            onChange={this.handleChange}
          />
          <br />
          {/* <button type="button" onClick={this.handleSubmit}>
            Submit
          </button> */}
          {this.state.editIndex === null ? (
            <input
              type="button"
              value="Submit"
              onClick={this.handleSubmit}
              disabled={this.state.isValid}
            />
          ) : (
            <input type="button" value="Update" onClick={this.handleUpdate} />
          )}
        </form>
        <hr />
        <table border="1">
          <thead>
            <tr>
              <th>NAME</th>
              <th>E-Mail</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((usr, i) => {
              return (
                <tr key={i}>
                  <td>{usr.name}</td>
                  <td>{usr.email}</td>
                  <td>
                    <button
                      onClick={() => {
                        this.handleEdit(usr, i);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        this.handleDelete(usr);
                      }}
                    >
                      Delete
                    </button>
                  </td>
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
