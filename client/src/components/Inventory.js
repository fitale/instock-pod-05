import React, { Component } from "react";
import searchIcon from "../assets/icons/icon-search.svg";
import addIcon from "../assets/icons/icon-add.svg";
import { Link } from "react-router-dom";
import ReactModal from "react-modal";
import ModalComp from "./ModalComp";

export default class Inventory extends Component {
  state = {
    showModal: false
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
