import React, { Component } from "react";
import Arrow from "../assets/icons/icon-arrow-right.svg";
import searchIcon from "../assets/icons/icon-search.svg";
export default class Warehouses extends Component {
  render() {
    return (
      <>
        <main className="main__warehouses">
          <div className="warehouses__header">
            <h1 className="warehouses__header-text">Locations</h1>
            <div className="inventory__upper--input warehouses__upper--input">
              <input type="text" placeholder="Search..." className="input" />
              <img src={searchIcon} alt="searchicon" className="search-icon" />
            </div>
          </div>

          <div className="warehouses">
            <div className="warehouses__columns">
              <div className="warehouse">
                {/*  BODY */}
                <div className="warehouse__body">
                  {/* TITLE BLOCK */}
                  <div className="warehouse__title--block">
                    <div className=" warehouse__address">TITLE</div>
                  </div>
                  {/* TITLE BLOCK FINISH */}
                  {/* ARROW BLOCK */}
                  <div className="warehouse__arrow"></div>
                  {/* END ARROW BLOCK */}
                  {/* CONTACT BLOCK */}
                  <div className="warehouse__contact--block">
                    <div className="warehouse__contact">CONTACT</div>
                  </div>
                  {/*  CONTACT BLOCK FINISH */}
                  {/* CONTACT INFORMATION BLOCK */}
                  <div className="warehouse__contact-information--block">
                    <div className="warehouse__phone">CONTACT INFORMATION</div>
                  </div>
                  {/*  CONTACT INFORMATION BLOCK FINISH */}
                  {/* CATEGORIES BLOCK */}
                  <div className="warehouse__categories--block">
                    <div className="warehouse__categories">CATEGORIES</div>
                  </div>
                  {/*  CATEGORIES BLOCK FINISH */}
                </div>
              </div>
            </div>

            <div className="warehouse">
              {/*  BODY */}
              <div className="warehouse__body">
                {/* TITLE BLOCK */}
                <div className="warehouse__title--block">
                  <div className="warehouse__field warehouse__title">
                    My Cool Warehouse
                  </div>
                  <div className=" warehouse__address">
                    469 King St W, Toronto, ON
                  </div>
                </div>
                {/* TITLE BLOCK FINISH */}
                {/* ARROW BLOCK */}
                <div className="warehouse__arrow">
                  <img
                    alt="cool arrow"
                    className="warehouse__arrow"
                    src={Arrow}
                  ></img>
                </div>
                {/* END ARROW BLOCK */}
                {/* CONTACT BLOCK */}
                <div className="warehouse__contact--block">
                  <div className="warehouse__contact">Mara Weinberg</div>
                  <div className=" warehouse__contact-title">
                    Warehouse Manager
                  </div>
                </div>
                {/*  CONTACT BLOCK FINISH */}
                {/* CONTACT INFORMATION BLOCK */}
                <div className="warehouse__contact-information--block">
                  <div className="warehouse__phone">+1 416 678 2345</div>
                  <div className=" warehouse__email">weinberg@instack.com</div>
                </div>
                {/*  CONTACT INFORMATION BLOCK FINISH */}
                {/* CATEGORIES BLOCK */}
                <div className="warehouse__categories--block">
                  <div className="warehouse__categories">
                    Industrial, Automotive, Heavy, Mechanical, Engineering,
                    Transportation
                  </div>
                </div>
                {/*  CATEGORIES BLOCK FINISH */}
              </div>
            </div>
            {/* BODY FINISH */}
          </div>
        </main>
      </>
    );
  }
}
