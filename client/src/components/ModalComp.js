import React, { Component } from "react";
import { Link } from "react-router-dom";
import Switch from 'react-switch';


export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.name = React.createRef();
    this.description = React.createRef();
    this.lastOrder = React.createRef();
    this.city = React.createRef();
    this.country = React.createRef();
    this.quantity = React.createRef();
    this.status = React.createRef();
    this.orderedBy = React.createRef();
    this.referenceNumber = React.createRef();
    this.categories = React.createRef();

    this.state = {
      checked: false
    };
     this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({checked})
  }
  render() {
    return (
      <div className="create-new">
        <h1 className="create-new__title">Create New</h1>
        <div className="create-new__container">
          <div className="create-new__container--flex">
            <h5 className="title">PRODUCT</h5>
            <input type="text" placeholder="Item Name" className="input" />
          </div>
          <div className="create-new__container--flex">
            <h5 className="title">LAST ORDERED</h5>
            <input type="text" placeholder="yyyy-mm-dd" className="input" />
          </div>
        </div>
        <div className="create-new__container">
          <div className="create-new__container--flex">
            <h5 className="title">CITY</h5>
            <input type="text" placeholder="City" className="input" />
          </div>
          <div className="create-new__container--flex">
            <h5 className="title">COUNTRY</h5>
            <input type="text" placeholder="Dropdown" className="input" />
          </div>
        </div>
        <div className="create-new__container">
          <div className="create-new__container--flex">
            <h5 className="title">QUANTITY</h5>
            <input type="text" placeholder="0" className="input" />
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
        <div className="create-new__container">
          <h5 className="create-new__container--description">
            ITEM DESCRIPTION
          </h5>
          <input
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
      </div>
    );
  }
}
