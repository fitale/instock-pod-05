import React, { Component } from "react";
import searchIcon from "../assets/icons/icon-search.svg";
import addIcon from "../assets/icons/icon-add.svg";
import defaultIcon from "../assets/icons/icon-kebab-default.svg";

export default class Inventory extends Component {
  render() {
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
          <h5 className="inventory__titles--item">ITEM</h5>
          <h5 className="inventory__titles--item">LAST ORDERED</h5>
          <h5 className="inventory__titles--item">LOCATION</h5>
          <h5 className="inventory__titles--item">QUANTITY</h5>
          <h5 className="inventory__titles--item">STATUS</h5>
          <h5 className="inventory__titles--item"></h5>
        </div>
        <div className="inventory__content">
          <div className="inventory__content--data">
            <div className="container">
              <h5 className="title">ITEM</h5>
              <h2 className="product-name">Product Name Here</h2>
              <h4 className="text flex-grow">
                Here is a very brief description of the product name, its uses,
                industries and possible attributes that could be used to
                describe the product.
              </h4>
            </div>
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
            <img src={defaultIcon} alt="defaultIcon" className="default-icon" />
            <div className="fixed">
              <img src={addIcon} alt="addIcon" className="fixed__add-icon" />
            </div>
          </div>
        </div>
        {/* second div  */}
        <div className="inventory__content">
          <div className="inventory__content--data">
            <div className="container">
              <h5 className="title">ITEM</h5>
              <h2 className="product-name">Product Name Here</h2>
              <h4 className="text">
                Here is a very brief description of the product name, its uses,
                industries and possible attributes that could be used to
                describe the product.
              </h4>
            </div>
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
            <img src={defaultIcon} alt="defaultIcon" className="icon" />
          </div>
        </div>
        {/* third div  */}
        <div className="inventory__content">
          <div className="inventory__content--data">
            <div className="container">
              <h5 className="title">ITEM</h5>
              <h2 className="product-name">Product Name Here</h2>
              <h4 className="text">
                Here is a very brief description of the product name, its uses,
                industries and possible attributes that could be used to
                describe the product.
              </h4>
            </div>
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
            <img src={defaultIcon} alt="defaultIcon" className="icon" />
          </div>
        </div>
        {/* fourth div  */}
        <div className="inventory__content">
          <div className="inventory__content--data">
            <div className="container">
              <h5 className="title">ITEM</h5>
              <h2 className="product-name">Product Name Here</h2>
              <h4 className="text">
                Here is a very brief description of the product name, its uses,
                industries and possible attributes that could be used to
                describe the product.
              </h4>
            </div>
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
            <img src={defaultIcon} alt="defaultIcon" className="icon" />
          </div>
        </div>
        {/* fifth div  */}
        <div className="inventory__content">
          <div className="inventory__content--data">
            <div className="container">
              <h5 className="title">ITEM</h5>
              <h2 className="product-name">Product Name Here</h2>
              <h4 className="text">
                Here is a very brief description of the product name, its uses,
                industries and possible attributes that could be used to
                describe the product.
              </h4>
            </div>
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
            <img src={defaultIcon} alt="defaultIcon" className="icon" />
          </div>
        </div>
        {/* sixth div  */}
        <div className="inventory__content">
          <div className="inventory__content--data">
            <div className="container">
              <h5 className="title">ITEM</h5>
              <h2 className="product-name">Product Name Here</h2>
              <h4 className="text">
                Here is a very brief description of the product name, its uses,
                industries and possible attributes that could be used to
                describe the product.
              </h4>
            </div>
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
            <img src={defaultIcon} alt="defaultIcon" className="icon" />
          </div>
        </div>
        {/* seventh div  */}
        <div className="inventory__content">
          <div className="inventory__content--data">
            <div className="container">
              <h5 className="title">ITEM</h5>
              <h2 className="product-name">Product Name Here</h2>
              <h4 className="text">
                Here is a very brief description of the product name, its uses,
                industries and possible attributes that could be used to
                describe the product.
              </h4>
            </div>
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
            <img src={defaultIcon} alt="defaultIcon" className="icon" />
          </div>
        </div>
        {/* eighth div */}
        <div className="inventory__content">
          <div className="inventory__content--data">
            <div className="container">
              <h5 className="title">ITEM</h5>
              <h2 className="product-name">Product Name Here</h2>
              <h4 className="text">
                Here is a very brief description of the product name, its uses,
                industries and possible attributes that could be used to
                describe the product.
              </h4>
            </div>
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
            <img src={defaultIcon} alt="defaultIcon" className="icon" />
          </div>
        </div>
        {/* ninth div */}

        <div className="inventory__content">
          <div className="inventory__content--data">
            <div className="container">
              <h5 className="title">ITEM</h5>
              <h2 className="product-name">Product Name Here</h2>
              <h4 className="text">
                Here is a very brief description of the product name, its uses,
                industries and possible attributes that could be used to
                describe the product.
              </h4>
            </div>
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
            <img src={defaultIcon} alt="defaultIcon" className="icon" />
          </div>
        </div>
      </main>
    );
  }
}
