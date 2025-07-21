import { Component } from "react";

class CompA extends Component {
  chamgeMsg = () => {
    this.props.changeMessageComp();
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>Welcome From CompA</h3>
        <hr />
        <button onClick={this.chamgeMsg}>Change CompB Message</button>
      </div>
    );
  }
}

export default CompA;
