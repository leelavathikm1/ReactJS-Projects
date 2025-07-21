import { Component } from "react";

class ChildTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Iam Coming From Child Component",
    };
  }
  sendDataToParent = () => {
    this.props.getInfo(this.state.message);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Iam From ChildTwo</h2>
        <button onClick={this.sendDataToParent}>Send data TO Parent</button>
      </div>
    );
  }
}

export default ChildTwo;
