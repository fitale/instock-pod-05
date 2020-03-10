import React, { Component } from "react";
import axios from "axios";

export default class Delete extends Component {
  deleteHandler = event => {
    axios
      .delete(`http://localhost:5000/api/inventory/${this.props.deleteItem}`)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="remove">
        <button onClick={this.deleteHandler} className="container__remove">
          <h5 className="container__remove--text">Remove</h5>
        </button>
      </div>
    );
  }
}
