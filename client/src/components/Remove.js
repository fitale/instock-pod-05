import React, { Component } from "react";
import axios from "axios";

export default class Delete extends Component {
  render() {
    console.log("props in the delete");
    return (
      <div className="remove">
        <button
          onClick={this.props.deleteHandler}
          className="container__remove"
        >
          <h5 className="container__remove--text">Remove</h5>
        </button>
      </div>
    );
  }
}
