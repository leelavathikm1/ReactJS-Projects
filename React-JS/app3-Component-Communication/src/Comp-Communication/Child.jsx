import { Component } from "react";

class Child extends Component {
  render() {
    return (
      <div>
        {/* <h2>{this.props.info}</h2> */}
        <ul>
          {Object.values(this.props.info).map((val, i) => {
            return <li key={i}>{val}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Child;
