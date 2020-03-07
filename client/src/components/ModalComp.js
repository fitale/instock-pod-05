import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.name = React.createRef();
    this.description = React.createRef();
    this.price = React.createRef();
    this.handleUploadSubmit = this.handleUploadSubmit.bind(this);
  }

  async uploadAProduct() {
    //Create the video object
    const newInventory = {
      name: this.name.value,
      description: this.description.value,
      city: "Toronto",
      country: "Canada",
      quantity: "12,000",
      status: "in-stock",
      orderedBy: "Mark Saunders",
      referenceNumber: "JK2020FD7811201",
      categories: [
        "Industrial",
        "Automotive",
        "Heavy",
        "Mechanical",
        "Engineering",
        "Sales"
      ]
    };
    // console.log(this.categories.value.split(","));
    console.log("new inventory item: ", newInventory);
    //use await and async to make sure all the videos are grabbed
    await axios
      .post("http://localhost:5000/api/inventory", newInventory)
      .then(res => {
        this.setState({
          inventory: res.data
        });
        return this.state;
      })
      .catch(err => {
        console.log(err);
      });
  }
  //setup the on click event, using async to confirm the upload is done before redirect
  async handleUploadSubmit(event) {
    event.preventDefault();
    await this.uploadAProduct(); //upload the video
    // const videoRedirectId = this.state.videos.slice(-1).pop()["id"]; // get the ID of the last submitted video
    // alert("video posted!");
    // await window.location.replace("/videos/" + videoRedirectId); //redirect to the last posted video
  }
  render() {
    return (
      <form onSubmit={this.handleUploadSubmit} className="create-new">
        <h1 className="create-new__title">Create New</h1>
        <div className="create-new__container">
          <div className="create-new__container--flex">
            <h5 className="title">Menu Item Name</h5>
            <input
              ref={name => {
                this.name = name;
              }}
              // ref={(this.name = input)}
              type="text"
              placeholder="Item Name"
              className="input"
            />
          </div>
          <div className="create-new__container--flex">
            <h5 className="title">Price</h5>
            <input
              ref={price => {
                this.price = price;
              }}
              type="text"
              className="input"
            />
          </div>
        </div>
        <div className="create-new__container">
          <h5 className="create-new__container--description">
            ITEM DESCRIPTION
          </h5>
          <input
            ref={description => {
              this.description = description;
            }}
            type="text"
            placeholder="(Optional)"
            className="create-new__container--input"
          />
        </div>
        <div className="create-new__container--button">
          <button className="save">SAVE</button>
          <Link to="/" className="cancel">
            CANCEL
          </Link>
          <button onClick={this.props.closeModalNow} className="desk-cancel">
            CANCEL
          </button>
        </div>
      </form>
    );
  }
}
