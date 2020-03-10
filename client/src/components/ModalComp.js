import React, { Component } from "react";
import { Link } from "react-router-dom";

import Switch from "react-switch";

import axios from "axios";
export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.name = React.createRef();
    this.description = React.createRef();
    // this.price = React.createRef();
    this.handleUploadSubmit = this.handleUploadSubmit.bind(this);
    // this.lastOrder = React.createRef();
    // this.city = React.createRef();
    // this.country = React.createRef();
    // this.quantity = React.createRef();
    // this.status = React.createRef();
    // this.orderedBy = React.createRef();
    // this.referenceNumber = React.createRef();
    // this.categories = React.createRef();

    this.state = {
      checked: false
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(checked) {
    this.setState({ checked });
    this.price = React.createRef();
    this.handleUploadSubmit = this.handleUploadSubmit.bind(this);
  }

  async uploadAProduct() {
    //Create the video object
    const newInventory = {
      name: this.name.value,
      description: this.description.value,
      lastOrder: "05/08/2020",
      city: "Toronto",
      country: "Canada",
      quantity: "12,000",
      status: "In-stock",
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
    //use await and async to make sure all the videos are grabbed
    await axios
      .post("http://localhost:5000/api/inventory", newInventory)
      .then(res => {
        this.props.updateTheState(res.data);
        return this.state;
      })
      .catch(err => {
        console.log(err);
      });
  }
  //setup the on click event, using async to confirm the upload is done before redirect
  async handleUploadSubmit(event) {
    event.preventDefault();
    this.props.closeModalNow();
    await this.uploadAProduct(); //upload the video
  }
  render() {
    let count = 0;
    count = count + 1;
    return (
      <form onSubmit={this.handleUploadSubmit} className="create-new">
        <h1 className="create-new__title">Create New</h1>
        <div className="create-new__container">
          <div className="create-new__container--flex">
            <h5 className="title">PRODUCT</h5>
            <input
              ref={name => {
                this.name = name;
              }}
              type="text"
              placeholder="Item Name"
              className="input"
            />
          </div>
          <div className="create-new__container--flex">
            <h5 className="title">LAST ORDERED</h5>
            <input
              ref={lastOrder => {
                this.lastOrder = lastOrder;
              }}
              type="text"
              placeholder="yyyy-mm-dd"
              className="input"
            />
          </div>
        </div>
        <div className="create-new__container">
          <div className="create-new__container--flex">
            <h5 className="title">CITY</h5>
            <input
              ref={city => {
                this.city = city;
              }}
              type="text"
              placeholder="City"
              className="input"
            />
          </div>
          <div className="create-new__container--flex">
            <h5 className="title">COUNTRY</h5>
            <input
              ref={country => {
                this.country = country;
              }}
              type="text"
              placeholder="Country"
              className="input"
            />
          </div>
        </div>
        <div className="create-new__container">
          <div className="create-new__container--flex">
            <h5 className="title">QUANTITY</h5>

            <input
              ref={price => {
                this.price = price;
              }}
              placeholder="0"
              type="text"
              className="input"
            />
          </div>
          <div className="create-new__container--flex">
            <h5 className="title">STATUS</h5>
            <label className="status__details">
              <p className="status__details-text">
                <b>{this.state.checked ? "In Stock" : "Out Of Stock"}</b>
              </p>
              <Switch
                className="status__details-actual"
                onChange={this.handleChange}
                checked={this.state.checked}
                onColor="#9acd32"
                onHandleColor="##808080"
                uncheckedIcon={false}
                checkedIcon={false}
                width={40}
                height={24}
              />
            </label>
          </div>
        </div>
        <div className="create-new__tablet-flex">
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
