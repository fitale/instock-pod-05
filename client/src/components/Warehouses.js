import React, { Component } from "react";
import Arrow from "../assets/icons/icon-arrow-right.svg";
import searchIcon from "../assets/icons/icon-search.svg";
export default class Warehouses extends Component {
  render() {
    console.log("warehouses: ");
    console.log(this.props.warehouses);

    if (this.props.warehouses.length > 0) {
      let html = this.props.warehouses.map(warehouse => {
        return (
          <div key={warehouse.id} className="warehouse">
            {/*  BODY */}
            <div className="warehouse__body">
              {/* TITLE BLOCK */}
              <div className="warehouse__title--block">
                <div className="warehouse__field warehouse__title">
                  {warehouse.name}
                </div>
                <div className=" warehouse__address">{warehouse.address}</div>
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
                <div className="warehouse__contact">{warehouse.contact}</div>
                <div className=" warehouse__contact-title">
                  {warehouse.contact_title}
                </div>
              </div>
              {/*  CONTACT BLOCK FINISH */}
              {/* CONTACT INFORMATION BLOCK */}
              <div className="warehouse__contact-information--block">
                <div className="warehouse__phone">{warehouse.phone}</div>
                <div className=" warehouse__email">{warehouse.email}</div>
              </div>
              {/*  CONTACT INFORMATION BLOCK FINISH */}
              {/* CATEGORIES BLOCK */}
              <div className="warehouse__categories--block">
                <div className="warehouse__categories">
                  {warehouse.categories.map(category => {
                    return category + ", ";
                  })}
                </div>
              </div>
              {/*  CATEGORIES BLOCK FINISH */}
            </div>
          </div>
        );
      });
      return (
        <>
          <main className="main__warehouses">
            <div className="warehouses__header">
              <h1 className="warehouses__header-text">Locations</h1>
              <div className="inventory__upper--input warehouses__upper--input">
                <input type="text" placeholder="Search..." className="input" />
                <img
                  src={searchIcon}
                  alt="searchicon"
                  className="search-icon"
                />
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
                      <div className="warehouse__phone">
                        CONTACT INFORMATION
                      </div>
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
              {html}
              {/* BODY FINISH */}
            </div>
          </main>
        </>
      );
    } else {
      return <></>;
    }
  }
}
