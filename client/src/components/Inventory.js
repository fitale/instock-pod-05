import React, { Component } from "react";
import searchIcon from "../assets/icons/icon-search.svg";
import addIcon from "../assets/icons/icon-add.svg";
import { Link } from "react-router-dom";
import ReactModal from "react-modal";
import ModalComp from "./ModalComp";
import axios from "axios";

export default class Inventory extends Component {
  state = {
    showModal: false,
    inventory: []
  };

  deleteInventoryItem = () => {
    axios.delete("http://localhost:5000/api/inventory/:reference").then(res => {
      console.log(res.data);
    });
  };

  handleOpenModal = () => {
    this.setState({
      showModal: true
    });
  };

  handleCloseModal = () => {
    this.setState({
      showModal: false
    });
  };

  render() {
    let html = this.props.inventory.map(item => {
      return (
        <div key={item.id} className="inventory__content">
          <div className="inventory__content--data">
            <h5 className="title">ITEM</h5>
            <div className="product-container">
              <h2 className="product-name">{item.name}</h2>
              <h4 className="flex-grow">{item.description}</h4>
            </div>
            <h5 className="title">LAST ORDERED</h5>
            <h4 className="text">{item.lastOrder}</h4>
            <h5 className="title">LOCATION</h5>
            <h4 className="text">{item.city}</h4>
            <h5 className="title">QUANTITY</h5>
            <h4 className="text">{item.quantity}</h4>
            <h5 className="title">STATUS</h5>
            <h4 className="text">{item.status}</h4>
          </div>
          <Link to="/:id" className="inventory__content--default-icon">
            <svg
              margin="none"
              width="4"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="default-icon"
                d="M0 2a2 2 0 114 0 2 2 0 01-4 0zm0 8a2 2 0 114 0 2 2 0 01-4 0zm0 8a2 2 0 114 0 2 2 0 01-4 0z"
                fill="#AFAFAF"
                fillRule="evenodd"
              />
            </svg>
          </Link>
          <button onSubmit={this.deleteInventoryItem}>
            <svg
              height="40px"
              viewBox="-40 0 427 427.00131"
              width="427pt"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0" />
              <path d="m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0" />
              <path d="m28.398438 127.121094v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282zm239.601562 279.878906h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm-158.601562-367.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm-71.199219 32.5h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18zm0 0" />
              <path d="m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0" />
            </svg>
          </button>
        </div>
      );
    });
    return (
      <main className="inventory">
        <div className="inventory__upper">
          <h1 className="inventory__upper--title">Inventory</h1>
          <div className="inventory__upper--input">
            <input type="text" placeholder="Search..." className="input" />
            <img src={searchIcon} alt="searchicon" className="search-icon" />
          </div>
        </div>
        <div className="inventory__titles">
          <h5 className="inventory__titles--flex-grow">ITEM</h5>
          <h5 className="inventory__titles--item">LAST ORDERED</h5>
          <h5 className="inventory__titles--item">LOCATION</h5>
          <h5 className="inventory__titles--item">QUANTITY</h5>
          <h5 className="inventory__titles--item">STATUS</h5>
        </div>
        {html}
        <Link to="/createnew" className="inventory__fixed">
          <img
            src={addIcon}
            alt="addIcon"
            className="inventory__fixed--add-icon"
          />
        </Link>
        <button
          onClick={this.handleOpenModal}
          to="/createnew"
          className="inventory__desk-fixed"
        >
          <img
            src={addIcon}
            alt="addIcon"
            className="inventory__desk-fixed--add-icon"
          />
        </button>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
        >
          <ModalComp closeModalNow={this.handleCloseModal} />
        </ReactModal>
      </main>
    );
  }
}
