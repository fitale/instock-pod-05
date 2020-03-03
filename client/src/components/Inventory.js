import React, { Component } from "react";
import searchIcon from "../assets/icons/icon-search.svg";
import addIcon from "../assets/icons/icon-add.svg";
import defaultIcon from "../assets/icons/icon-kebab-default.svg";

export default class Inventory extends Component {
  render() {
    return (
      <main className="inventory">
        <h1 className="inventory__title">Inventory</h1>
        <div className="inventory__upper">
          <input
            type="text"
            placeholder="Search..."
            className="inventory__upper--input"
          />
          <img
            src={searchIcon}
            alt="searchicon"
            className="inventory__upper--search-icon"
          />
        </div>
        <div className="inventory__content">
          <div className="inventory__content--titles">
            <h5 className="titles">ITEM</h5>
            <h5 className="titles">LAST ORDERED</h5>
            <h5 className="titles">LOCATION</h5>
            <h5 className="titles">QUANTITY</h5>
            <h5 className="titles">STATUS</h5>
          </div>
          <div className="inventory__content--data">
            <h5 className="title">ITEM</h5>
            <h2 className="product-name">Product Name Here</h2>
            <h4 className="text">
              Here is a very brief description of the product name, its uses,
              industries and possible attributes that could be used to describe
              the product.
            </h4>
            <h5 className="title">LAST ORDERED</h5>
            <h4 className="text">05/24/2020</h4>
            <h5 className="title">LOCATION</h5>
            <h4 className="text">Toronto, CAN</h4>
            <h5 className="title">QUANTITY</h5>
            <h4 className="text">12,000</h4>
            <h5 className="title">STATUS</h5>
            <h4 className="text">In Stock</h4>
          </div>
          <div className="inventory__content--icon">
            <img src={defaultIcon} className="default-icon" />
            <div className="fixed">
              <img src={addIcon} alt="addIcon" className="fixed__add-icon" />
            </div>
          </div>
        </div>
        {/* second div  */}
        <div className="inventory__content">
          <div className="inventory__content--titles">
            <h5 className="titles">ITEM</h5>
            <h5 className="titles">LAST ORDERED</h5>
            <h5 className="titles">LOCATION</h5>
            <h5 className="titles">QUANTITY</h5>
            <h5 className="titles">STATUS</h5>
          </div>
          <div className="inventory__content--data">
            <h5 className="title">ITEM</h5>
            <h2 className="product-name">Product Name Here</h2>
            <h4 className="text">
              Here is a very brief description of the product name, its uses,
              industries and possible attributes that could be used to describe
              the product.
            </h4>
            <h5 className="title">LAST ORDERED</h5>
            <h4 className="text">05/24/2020</h4>
            <h5 className="title">LOCATION</h5>
            <h4 className="text">Toronto, CAN</h4>
            <h5 className="title">QUANTITY</h5>
            <h4 className="text">12,000</h4>
            <h5 className="title">STATUS</h5>
            <h4 className="text">In Stock</h4>
          </div>
          <div className="inventory__content--icon">
            <img src={defaultIcon} className="icon" />
          </div>
        </div>
        {/* third div  */}
        <div className="inventory__content">
          <div className="inventory__content--titles">
            <h5 className="titles">ITEM</h5>
            <h5 className="titles">LAST ORDERED</h5>
            <h5 className="titles">LOCATION</h5>
            <h5 className="titles">QUANTITY</h5>
            <h5 className="titles">STATUS</h5>
          </div>
          <div className="inventory__content--data">
            <h5 className="title">ITEM</h5>
            <h2 className="product-name">Product Name Here</h2>
            <h4 className="text">
              Here is a very brief description of the product name, its uses,
              industries and possible attributes that could be used to describe
              the product.
            </h4>
            <h5 className="title">LAST ORDERED</h5>
            <h4 className="text">05/24/2020</h4>
            <h5 className="title">LOCATION</h5>
            <h4 className="text">Toronto, CAN</h4>
            <h5 className="title">QUANTITY</h5>
            <h4 className="text">12,000</h4>
            <h5 className="title">STATUS</h5>
            <h4 className="text">In Stock</h4>
          </div>
          <div className="inventory__content--icon">
            <img src={defaultIcon} className="icon" />
          </div>
        </div>
        {/* fourth div  */}
        <div className="inventory__content">
          <div className="inventory__content--titles">
            <h5 className="titles">ITEM</h5>
            <h5 className="titles">LAST ORDERED</h5>
            <h5 className="titles">LOCATION</h5>
            <h5 className="titles">QUANTITY</h5>
            <h5 className="titles">STATUS</h5>
          </div>
          <div className="inventory__content--data">
            <h5 className="title">ITEM</h5>
            <h2 className="product-name">Product Name Here</h2>
            <h4 className="text">
              Here is a very brief description of the product name, its uses,
              industries and possible attributes that could be used to describe
              the product.
            </h4>
            <h5 className="title">LAST ORDERED</h5>
            <h4 className="text">05/24/2020</h4>
            <h5 className="title">LOCATION</h5>
            <h4 className="text">Toronto, CAN</h4>
            <h5 className="title">QUANTITY</h5>
            <h4 className="text">12,000</h4>
            <h5 className="title">STATUS</h5>
            <h4 className="text">In Stock</h4>
          </div>
          <div className="inventory__content--icon">
            <img src={defaultIcon} className="icon" />
          </div>
        </div>
        {/* fifth div  */}
        <div className="inventory__content">
          <div className="inventory__content--titles">
            <h5 className="titles">ITEM</h5>
            <h5 className="titles">LAST ORDERED</h5>
            <h5 className="titles">LOCATION</h5>
            <h5 className="titles">QUANTITY</h5>
            <h5 className="titles">STATUS</h5>
          </div>
          <div className="inventory__content--data">
            <h5 className="title">ITEM</h5>
            <h2 className="product-name">Product Name Here</h2>
            <h4 className="text">
              Here is a very brief description of the product name, its uses,
              industries and possible attributes that could be used to describe
              the product.
            </h4>
            <h5 className="title">LAST ORDERED</h5>
            <h4 className="text">05/24/2020</h4>
            <h5 className="title">LOCATION</h5>
            <h4 className="text">Toronto, CAN</h4>
            <h5 className="title">QUANTITY</h5>
            <h4 className="text">12,000</h4>
            <h5 className="title">STATUS</h5>
            <h4 className="text">In Stock</h4>
          </div>
          <div className="inventory__content--icon">
            <img src={defaultIcon} className="icon" />
          </div>
        </div>
        {/* sixth div  */}
        <div className="inventory__content">
          <div className="inventory__content--titles">
            <h5 className="titles">ITEM</h5>
            <h5 className="titles">LAST ORDERED</h5>
            <h5 className="titles">LOCATION</h5>
            <h5 className="titles">QUANTITY</h5>
            <h5 className="titles">STATUS</h5>
          </div>
          <div className="inventory__content--data">
            <h5 className="title">ITEM</h5>
            <h2 className="product-name">Product Name Here</h2>
            <h4 className="text">
              Here is a very brief description of the product name, its uses,
              industries and possible attributes that could be used to describe
              the product.
            </h4>
            <h5 className="title">LAST ORDERED</h5>
            <h4 className="text">05/24/2020</h4>
            <h5 className="title">LOCATION</h5>
            <h4 className="text">Toronto, CAN</h4>
            <h5 className="title">QUANTITY</h5>
            <h4 className="text">12,000</h4>
            <h5 className="title">STATUS</h5>
            <h4 className="text">In Stock</h4>
          </div>
          <div className="inventory__content--icon">
            <img src={defaultIcon} className="icon" />
          </div>
        </div>
        {/* seventh div  */}
        <div className="inventory__content">
          <div className="inventory__content--titles">
            <h5 className="titles">ITEM</h5>
            <h5 className="titles">LAST ORDERED</h5>
            <h5 className="titles">LOCATION</h5>
            <h5 className="titles">QUANTITY</h5>
            <h5 className="titles">STATUS</h5>
          </div>
          <div className="inventory__content--data">
            <h5 className="title">ITEM</h5>
            <h2 className="product-name">Product Name Here</h2>
            <h4 className="text">
              Here is a very brief description of the product name, its uses,
              industries and possible attributes that could be used to describe
              the product.
            </h4>
            <h5 className="title">LAST ORDERED</h5>
            <h4 className="text">05/24/2020</h4>
            <h5 className="title">LOCATION</h5>
            <h4 className="text">Toronto, CAN</h4>
            <h5 className="title">QUANTITY</h5>
            <h4 className="text">12,000</h4>
            <h5 className="title">STATUS</h5>
            <h4 className="text">In Stock</h4>
          </div>
          <div className="inventory__content--icon">
            <img src={defaultIcon} className="icon" />
          </div>
        </div>
        {/* eighth div */}
        <div className="inventory__content">
          <div className="inventory__content--titles">
            <h5 className="titles">ITEM</h5>
            <h5 className="titles">LAST ORDERED</h5>
            <h5 className="titles">LOCATION</h5>
            <h5 className="titles">QUANTITY</h5>
            <h5 className="titles">STATUS</h5>
          </div>
          <div className="inventory__content--data">
            <h5 className="title">ITEM</h5>
            <h2 className="product-name">Product Name Here</h2>
            <h4 className="text">
              Here is a very brief description of the product name, its uses,
              industries and possible attributes that could be used to describe
              the product.
            </h4>
            <h5 className="title">LAST ORDERED</h5>
            <h4 className="text">05/24/2020</h4>
            <h5 className="title">LOCATION</h5>
            <h4 className="text">Toronto, CAN</h4>
            <h5 className="title">QUANTITY</h5>
            <h4 className="text">12,000</h4>
            <h5 className="title">STATUS</h5>
            <h4 className="text">In Stock</h4>
          </div>
          <div className="inventory__content--icon">
            <img src={defaultIcon} className="icon" />
          </div>
        </div>
        {/* ninth div */}

        <div className="inventory__content">
          <div className="inventory__content--titles">
            <h5 className="titles">ITEM</h5>
            <h5 className="titles">LAST ORDERED</h5>
            <h5 className="titles">LOCATION</h5>
            <h5 className="titles">QUANTITY</h5>
            <h5 className="titles">STATUS</h5>
          </div>
          <div className="inventory__content--data">
            <h5 className="title">ITEM</h5>
            <h2 className="product-name">Product Name Here</h2>
            <h4 className="text">
              Here is a very brief description of the product name, its uses,
              industries and possible attributes that could be used to describe
              the product.
            </h4>
            <h5 className="title">LAST ORDERED</h5>
            <h4 className="text">05/24/2020</h4>
            <h5 className="title">LOCATION</h5>
            <h4 className="text">Toronto, CAN</h4>
            <h5 className="title">QUANTITY</h5>
            <h4 className="text">12,000</h4>
            <h5 className="title">STATUS</h5>
            <h4 className="text">In Stock</h4>
          </div>
          <div className="inventory__content--icon">
            <img src={defaultIcon} className="icon" />
          </div>
        </div>
      </main>
    );
  }
}
