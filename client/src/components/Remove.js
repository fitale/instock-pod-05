import React, { Component } from "react";

export default class Delete extends Component {
  render() {
    return (
      <div className="container">
        <button className="container__remove">
          <h5 className="container__remove--text">Remove</h5>
        </button>
      </div>
    );
  }
}
