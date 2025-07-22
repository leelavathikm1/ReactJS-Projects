import { Component } from "react";

export class UserCrud extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        fname: "",
        lname: "",
        email: "",
        userName: "",
      },

      users: [],
      editIndex: null,
    };
  }

  handleChange = (e) => {
    const inputName = e.target.name;
    const userEnteredValue = e.target.value;
    const newUser = { ...this.state.user };
    newUser[inputName] = userEnteredValue;
    this.setState({ user: newUser });
    // console.log(inputName);
    // console.log(userEnteredValue);
    // console.log(newUser);
  };

  handleSubmit = () => {
    const newUsers = [...this.state.users];
    newUsers.push(this.state.user);
    this.setState({ users: newUsers });
    // console.log(this.state.users);
    this.handleReset();
  };

  handleReset = () => {
    const newUser = {
      fname: "",
      lname: "",
      email: "",
      userName: "",
    };
    this.setState({ user: newUser });
  };

  handleEdit = (usr, i) => {
    this.setState({ user: usr, editIndex: i });
    console.log(usr);
  };

  handleDelete = (usr, i) => {
    // console.log(usr);
    // const newUsers = this.state.users.filter((u) => {
    //   return u.email !== usr.email;
    // });
    const deluser = [...this.state.users];
    deluser.splice(i, 1);
    this.setState({ users: deluser });
    console.log(deluser);
  };

  handleUpdate = () => {
    const newUsers = [...this.state.users];
    newUsers[this.state.editIndex] = this.state.user;
    this.setState({ users: newUsers });
    this.handleReset();
  };

  render() {
    const { fname, lname, email, userName } = this.state.user;
    return (
      <div>
        <form>
          <label htmlFor="fname">First Name</label>
          <br />
          <input
            type="text"
            id="fname"
            name="fname"
            value={fname}
            onChange={this.handleChange}
          />
          <br />

          <label htmlFor="lname">Last Name</label>
          <br />
          <input
            type="text"
            id="lname"
            name="lname"
            value={lname}
            onChange={this.handleChange}
          />
          <br />

          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <br />

          <label htmlFor="userName">UserName</label>
          <br />
          <input
            type="text"
            id="userName"
            name="userName"
            value={userName}
            onChange={this.handleChange}
          />
          <br />
          {this.state.editIndex === null ? (
            <input type="button" value="Submit" onClick={this.handleSubmit} />
          ) : (
            <input type="button" value="Update" onClick={this.handleUpdate} />
          )}
          {/* <button type="button" onClick={this.handleSubmit}>
            Submit
          </button>
           <button type="button" onClick={this.handleUpdate}>
              Update
            </button> */}
        </form>
        <hr />
        <table border="1">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>User Name</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((usr, i) => {
              return (
                <tr key={i}>
                  <td>{usr.fname}</td>
                  <td>{usr.lname}</td>
                  <td>{usr.email}</td>
                  <td>{usr.userName}</td>
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
                        this.handleDelete(usr, i);
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
