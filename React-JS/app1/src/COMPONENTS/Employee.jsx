import { Component } from "react";

class Employee extends Component {
  constructor() {
    super();
    this.state = {
      info: "Welcome TO Employee Component",
      empInfo: {
        empName: "Leela",
        email: "leelakm@gmail.com",
      },
      skills: ["HTML", "CSS", "Javascript", "ReactJS"],
    };
  }

  render() {
    // Destructuring is, extracting values from object or arrays
    const { info, empInfo, skills } = this.state;
    return (
      <div>
        <h2>{info}</h2>

        <ul>
          {Object.values(empInfo).map((val, i) => {
            return <li key={i}>{val}</li>;
          })}
        </ul>

        <ul>
          {skills.map((val, i) => {
            return <li>{val}</li>;
          })}
        </ul>

        {/* <ul>
          {Object.values(this.state.empInfo).map((val, i) => {
            return <li keys={i}>{val}</li>;
          })}
        </ul> */}
      </div>
    );
  }
}

export default Employee;
