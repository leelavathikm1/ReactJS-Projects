import React, { Component } from "react";
import { EndUserMessageConsumenr } from "./ContextFive";

export default class ChildFive extends Component {
  render() {
    return (
      <div>
        <EndUserMessageConsumenr>
          {(value) => {
            console.log(value);
          }}
        </EndUserMessageConsumenr>
      </div>
    );
  }
}
