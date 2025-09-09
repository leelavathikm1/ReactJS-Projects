import { Component } from "react";

export default class StudentOneComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      student: {
        fname: "",
        lname: "",
        email: "",
      },
    };
  }
  render() {
    return (
      <div>
        <form>
          <label htmlFor="fname">Enter Name </label>
          <br />
        </form>
      </div>
    );
  }
}
