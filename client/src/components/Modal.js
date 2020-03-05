import React, { Component } from "react";

export default class Modal extends Component {
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
            <p>in stock or out of stock and switch</p>
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
          <button className="cancel">CANCEL</button>
        </div>
      </div>
    );
  }
}
