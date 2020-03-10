import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Delete extends Component {
  // Remove handler deletes item after page refresh

  deleteHandler = event => {
    axios
      .delete(`http://localhost:5000/api/inventory/${this.props.deleteItem}`)
      .then(res => {
        console.log(res);
        window.location.reload(false);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="remove">
        <button onClick={this.deleteHandler} className="remove__remove">
          <h5 className="remove__remove--text">Remove</h5>
        </button>
      </div>
    );
  }
}
